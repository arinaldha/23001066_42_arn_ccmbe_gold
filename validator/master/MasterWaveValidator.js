const { body, validationResult } = require("express-validator");

const masterWaveValidator = [
  body("class_id", "Class ID is required").notEmpty(),
  body("class_id", "Class ID must be integer").isNumeric(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  masterWaveValidator,
  handleValidationErrors,
};
