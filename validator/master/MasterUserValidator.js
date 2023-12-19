const { body, validationResult } = require("express-validator");

const masterUserValidator = [
  body("name", "Name is required").notEmpty(),
  body("email", "Email is required").notEmpty(),
  body("email", "Email is invalid").isEmail(),
  body("role_id", "Role ID is required").notEmpty(),
  body("role_id", "Role ID must be integer").isNumeric(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  masterUserValidator,
  handleValidationErrors,
};
