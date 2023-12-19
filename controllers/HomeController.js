const LoginServices = require("../services/LoginServices");
const { validationResult } = require("express-validator");

const home = (req, res) => {
  res.send("this is home page");
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const result = await LoginServices.Login(req, res);
  return result;
};

module.exports = {
  home,
  login,
};
