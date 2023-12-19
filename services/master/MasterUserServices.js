const db = require("../db");
const helper = require("../../helper/helper");
const bcrypt = require("bcrypt");

async function get(req, res) {
  const rows = await db.query(
    "SELECT id, name, email, role_id FROM users WHERE deleted_at IS NULL"
  );
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function create(req, res) {
  const { name, email, role_id } = req.body;

  const password = helper.generateRandomChar(10);
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  // Hash the password with the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const result = await db.query(
    "INSERT INTO users (name, email, password, role_id, created_at) VALUES (?,?,?,?,?)",
    [name, email, hashedPassword, role_id, helper.timestamp()]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master User created successfully" });
  }

  return res.status(500).json({ message: "Error when create Master User" });
}

async function find(req, res) {
  const { id } = req.params;
  const rows = await db.findOne(
    `SELECT id, name, email, role_id FROM users WHERE id = ?`,
    [id]
  );
  const data = helper.emptyOrRows(rows);
  return res.send({ data });
}

async function update(req, res) {
  const { id } = req.params;
  const { name, email, role_id } = req.body;

  const result = await db.query(
    "UPDATE users SET name=?, email=?, role_id=?, updated_at=? WHERE id=?",
    [name, email, role_id, helper.timestamp(), id]
  );

  if (result.affectedRows) {
    return res.send({ message: "Master User updated successfully" });
  }

  return res.status(500).json({ message: "Error when update Master User" });
}

async function softDelete(req, res) {
  const { id } = req.params;

  const result = await db.query("UPDATE users SET deleted_at=? WHERE id=?", [
    helper.timestamp(),
    id,
  ]);

  if (result.affectedRows) {
    return res.send({ message: "Master Users deleted successfully" });
  }

  return res.status(500).json({ message: "Error when delete Master Users" });
}

module.exports = { get, create, find, update, softDelete };
