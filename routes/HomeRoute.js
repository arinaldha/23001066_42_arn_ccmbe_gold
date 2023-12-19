const express = require("express");
const router = express.Router();

const homeController = require("../controllers/HomeController");
const {
  loginValidator,
  handleValidationErrors,
} = require("../validator/auth/LoginValidator");

router.get("/", homeController.home);
router.post(
  "/verify",
  loginValidator,
  handleValidationErrors,
  homeController.login
);

module.exports = router;
