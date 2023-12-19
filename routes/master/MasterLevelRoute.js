const express = require("express");
const router = express.Router();

const masterLevelController = require("../../controllers/master/MasterLevelController");
const {
  masterLevelValidator,
  handleValidationErrors,
} = require("../../validator/master/MasterLevelValidator");
const { verifyToken } = require("../../middlewares/VerifyToken");

router.get("/", verifyToken, masterLevelController.list);
router.post(
  "/",
  verifyToken,
  masterLevelValidator,
  handleValidationErrors,
  masterLevelController.create
);
router.get("/:id", verifyToken, masterLevelController.find);
router.put(
  "/:id",
  verifyToken,
  masterLevelValidator,
  handleValidationErrors,
  masterLevelController.update
);
router.delete("/:id", verifyToken, masterLevelController.softDelete);

module.exports = router;
