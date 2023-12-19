const db = require("./db");
const helper = require("../helper/helper");
const config = require("../config/db");

async function Login(req, res) {
  const { email, password } = req.body;
  const rows = await db.findOne(
    `SELECT id, name, email, photo_profile, role_id 
      FROM users WHERE email = ? AND password = ? LIMIT 1`,
    [email, password]
  );
  const data = helper.emptyOrRows(rows);

  if (data.length === 0) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  return res.send({ data });
}

module.exports = {
  Login,
};
