const masterClassServices = require("../../services/master/MasterClassServices");

const list = async (req, res) => {
  const result = await masterClassServices.get(req, res);
  return result;
};

const create = async (req, res) => {
  const result = await masterClassServices.create(req, res);
  return result;
};

const find = async (req, res) => {
  const result = await masterClassServices.find(req, res);
  return result;
};

const update = async (req, res) => {
  const result = await masterClassServices.update(req, res);
  return result;
};

const softDelete = async (req, res) => {
  const result = await masterClassServices.softDelete(req, res);
  return result;
};

module.exports = { list, create, find, update, softDelete };
