const express = require("express");
const router = express.Router();

const masterUserController = require("../../controllers/master/MasterUserController");
const {
  masterUserValidator,
  handleValidationErrors,
} = require("../../validator/master/MasterUserValidator");
const { verifyToken } = require("../../middlewares/VerifyToken");

router.get("/", verifyToken, masterUserController.list);
router.post(
  "/",
  verifyToken,
  masterUserValidator,
  handleValidationErrors,
  masterUserController.create
);
router.get("/:id", verifyToken, masterUserController.find);
router.put(
  "/:id",
  verifyToken,
  masterUserValidator,
  handleValidationErrors,
  masterUserController.update
);
router.delete("/:id", verifyToken, masterUserController.softDelete);

module.exports = router;
