const masterLevelServices = require("../../services/master/MasterLevelServices");

const list = async (req, res) => {
  const result = await masterLevelServices.get(req, res);
  return result;
};

const create = async (req, res) => {
  const result = await masterLevelServices.create(req, res);
  return result;
};

const find = async (req, res) => {
  const result = await masterLevelServices.find(req, res);
  return result;
};

const update = async (req, res) => {
  const result = await masterLevelServices.update(req, res);
  return result;
};

const softDelete = async (req, res) => {
  const result = await masterLevelServices.softDelete(req, res);
  return result;
};

module.exports = { list, create, find, update, softDelete };
