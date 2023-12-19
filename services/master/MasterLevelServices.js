const db = require("../db");
const helper = require("../../helper/helper");

async function get(req, res) {
  const rows = await db.query("SELECT * FROM levels WHERE deleted_at IS NULL");
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function create(req, res) {
  const { name } = req.body;
  const userId = req.user.data.id;

  const result = await db.query(
    "INSERT INTO levels (name, created_at, created_by) VALUES (?,?,?)",
    [name, helper.timestamp(), userId]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Levels created successfully" });
  }

  return res.status(500).json({ message: "Error when create Master Levels" });
}

async function find(req, res) {
  const { id } = req.params;
  const rows = await db.findOne(`SELECT * FROM levels WHERE id = ?`, [id]);
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const userId = req.user.data.id;

  const result = await db.query(
    "UPDATE levels SET name=?, updated_at=?, updated_by=? WHERE id=?",
    [name, helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Levels updated successfully" });
  }

  return res.status(500).json({ message: "Error when update Master Levels" });
}

async function softDelete(req, res) {
  const { id } = req.params;
  const userId = req.user.data.id;

  const result = await db.query(
    "UPDATE levels SET deleted_at=?, deleted_by=? WHERE id=?",
    [helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Levels deleted successfully" });
  }

  return res.status(500).json({ message: "Error when delete Master Levels" });
}

module.exports = { get, create, find, update, softDelete };
