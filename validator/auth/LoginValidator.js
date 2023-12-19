const { body, validationResult } = require("express-validator");

const loginValidator = [
  body("email", "Email is required").notEmpty(),
  body("email", "Email is invalid").isEmail(),
  body("password", "Password is required").notEmpty(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  loginValidator,
  handleValidationErrors,
};
