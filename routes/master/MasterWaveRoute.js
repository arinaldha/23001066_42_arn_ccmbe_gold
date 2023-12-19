const express = require("express");
const router = express.Router();

const masterWaveController = require("../../controllers/master/MasterWaveController");
const {
  masterWaveValidator,
  handleValidationErrors,
} = require("../../validator/master/MasterWaveValidator");
const { verifyToken } = require("../../middlewares/VerifyToken");

router.get("/", verifyToken, masterWaveController.list);
router.post(
  "/",
  verifyToken,
  masterWaveValidator,
  handleValidationErrors,
  masterWaveController.create
);
router.get("/:id", verifyToken, masterWaveController.find);
router.put(
  "/:id",
  verifyToken,
  masterWaveValidator,
  handleValidationErrors,
  masterWaveController.update
);
router.delete("/:id", verifyToken, masterWaveController.softDelete);

module.exports = router;
