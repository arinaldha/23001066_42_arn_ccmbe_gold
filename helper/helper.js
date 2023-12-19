const moment = require("moment");

function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function timestamp() {
  const currentDate = moment();
  return currentDate.format("YYYY-MM-DD HH:mm:ss");
}

module.exports = {
  getOffset,
  emptyOrRows,
  timestamp,
};
