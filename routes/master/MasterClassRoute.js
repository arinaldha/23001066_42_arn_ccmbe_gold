const express = require("express");
const router = express.Router();

const masterClassController = require("../../controllers/master/MasterClassController");
const {
  masterClassValidator,
  handleValidationErrors,
} = require("../../validator/master/MasterClassValidator");
const { verifyToken } = require("../../middlewares/VerifyToken");

router.get("/", verifyToken, masterClassController.list);
router.post(
  "/",
  masterClassValidator,
  handleValidationErrors,
  verifyToken,
  masterClassController.create
);
router.get("/:id", verifyToken, masterClassController.find);
router.put(
  "/:id",
  masterClassValidator,
  handleValidationErrors,
  verifyToken,
  masterClassController.update
);
router.delete("/:id", verifyToken, masterClassController.softDelete);

module.exports = router;
