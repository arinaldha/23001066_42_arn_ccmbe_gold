const { body, validationResult } = require("express-validator");

const masterClassValidator = [
  body("code", "Code is required").notEmpty(),
  body("name", "Name is required").notEmpty(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  masterClassValidator,
  handleValidationErrors,
};
