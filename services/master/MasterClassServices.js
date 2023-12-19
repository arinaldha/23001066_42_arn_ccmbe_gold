const db = require("../db");
const helper = require("../../helper/helper");

async function get(req, res) {
  const rows = await db.query("SELECT * FROM class WHERE deleted_at IS NULL");
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function create(req, res) {
  const { code, name } = req.body;
  const userId = req.user.data.id;

  const result = await db.query(
    "INSERT INTO class (name, code, created_at, created_by) VALUES (?,?,?,?)",
    [name, code, helper.timestamp(), userId]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Class created successfully" });
  }

  return res.status(500).json({ message: "Error when create Master Class" });
}

async function find(req, res) {
  const { id } = req.params;
  const rows = await db.findOne(`SELECT * FROM class WHERE id = ?`, [id]);
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function update(req, res) {
  const { id } = req.params;
  const { code, name } = req.body;
  const userId = req.user.data.id;

  const result = await db.query(
    "UPDATE class SET name=?, code=?, updated_at=?, updated_by=? WHERE id=?",
    [name, code, helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Class updated successfully" });
  }

  return res.status(500).json({ message: "Error when update Master Class" });
}

async function softDelete(req, res) {
  const { id } = req.params;
  const userId = req.user.data.id;

  const result = await db.query(
    "UPDATE class SET deleted_at=?, deleted_by=? WHERE id=?",
    [helper.timestamp(), userId, id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master Class deleted successfully" });
  }

  return res.status(500).json({ message: "Error when delete Master Class" });
}

module.exports = { get, create, find, update, softDelete };
