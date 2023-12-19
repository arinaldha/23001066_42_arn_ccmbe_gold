const masterUserServices = require("../../services/master/MasterUserServices");

const list = async (req, res) => {
  const result = await masterUserServices.get(req, res);
  return result;
};

const create = async (req, res) => {
  const result = await masterUserServices.create(req, res);
  return result;
};

const find = async (req, res) => {
  const result = await masterUserServices.find(req, res);
  return result;
};

const update = async (req, res) => {
  const result = await masterUserServices.update(req, res);
  return result;
};

const softDelete = async (req, res) => {
  const result = await masterUserServices.softDelete(req, res);
  return result;
};

module.exports = { list, create, find, update, softDelete };
