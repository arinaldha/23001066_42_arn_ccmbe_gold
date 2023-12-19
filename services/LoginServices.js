const db = require("./db");
const helper = require("../helper/helper");
const config = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.JWT_SECRET;

async function Login(req, res) {
  const { email, password } = req.body;
  const rows = await db.findOne(
    `SELECT id, name, email, photo_profile, role_id, password 
      FROM users WHERE email = ?`,
    [email]
  );
  const data = helper.emptyOrRows(rows);

  if (data.length === 0 || !(await bcrypt.compare(password, data.password))) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  delete data.password;
  const token = jwt.sign({ data }, secretKey, { expiresIn: "1h" });

  return res.send({ token: token });
}

module.exports = {
  Login,
};
