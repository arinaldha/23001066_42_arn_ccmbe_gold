const { body, validationResult } = require("express-validator");

const masterLevelValidator = [body("name", "Name is required").notEmpty()];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  masterLevelValidator,
  handleValidationErrors,
};
