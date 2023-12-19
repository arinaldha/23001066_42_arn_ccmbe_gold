const db = require("../db");
const helper = require("../../helper/helper");

async function get(req, res) {
  const rows = await db.query(
    "SELECT class.name as class_name, waves.wave FROM waves JOIN class ON class.id = waves.class_id WHERE waves.deleted_at IS NULL"
  );
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function create(req, res) {
  const { class_id } = req.body;
  const userId = req.user.data.id;

  const getLastWaves = await db.findOne(
    "SELECT COUNT(*) as total FROM waves WHERE class_id = ? AND deleted_at IS NULL GROUP BY class_id",
    [class_id]
  );

  let totalWave = 1;
  if (getLastWaves) {
    totalWave = parseInt(getLastWaves.total) + 1;
  }

  const result = await db.query(
    "INSERT INTO waves (class_id, wave, created_at, created_by) VALUES (?,?,?,?)",
    [class_id, totalWave, helper.timestamp(), userId]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Waves created successfully" });
  }

  return res.status(500).json({ message: "Error when create Master Waves" });
}

async function find(req, res) {
  const { id } = req.params;
  const rows = await db.findOne(
    `SELECT waves.id, class.name as class_name, waves.wave FROM waves JOIN class ON class.id = waves.class_id WHERE waves.id = ?`,
    [id]
  );
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function update(req, res) {
  const { id } = req.params;
  const { class_id } = req.body;
  const userId = req.user.data.id;

  const oldData = await db.query("SELECT * FROM waves WHERE id=?", [id]);

  const getLastWaves = await db.findOne(
    "SELECT COUNT(*) as total FROM waves WHERE class_id = ? AND deleted_at IS NULL GROUP BY class_id",
    [class_id]
  );
  let totalWave;
  if (oldData.class_id === class_id) {
    totalWave = oldData.wave;
  } else {
    totalWave = 1;
    if (getLastWaves) {
      totalWave = parseInt(getLastWaves.total) + 1;
    }
  }

  const result = await db.query(
    "UPDATE waves SET class_id=?, wave=?, updated_at=?, updated_by=? WHERE id=?",
    [class_id, totalWave, helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Wave updated successfully" });
  }

  return res.status(500).json({ message: "Error when update Master Wave" });
}

async function softDelete(req, res) {
  const { id } = req.params;
  const userId = req.user.data.id;

  const result = await db.query(
    "UPDATE waves SET deleted_at=?, deleted_by=? WHERE id=?",
    [helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Wave deleted successfully" });
  }

  return res.status(500).json({ message: "Error when delete Master Wave" });
}

module.exports = { get, create, find, update, softDelete };
