const mysql = require("mysql2/promise");
const config = require("../config/db");

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
}

async function findOne(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results.length > 0 ? results[0] : null;
}

module.exports = {
  query,
  findOne,
};
