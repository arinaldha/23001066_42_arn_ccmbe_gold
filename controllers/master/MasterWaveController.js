const masterWaveServices = require("../../services/master/MasterWaveServices");

const list = async (req, res) => {
  const result = await masterWaveServices.get(req, res);
  return result;
};

const create = async (req, res) => {
  const result = await masterWaveServices.create(req, res);
  return result;
};

const find = async (req, res) => {
  const result = await masterWaveServices.find(req, res);
  return result;
};

const update = async (req, res) => {
  const result = await masterWaveServices.update(req, res);
  return result;
};

const softDelete = async (req, res) => {
  const result = await masterWaveServices.softDelete(req, res);
  return result;
};

module.exports = { list, create, find, update, softDelete };
