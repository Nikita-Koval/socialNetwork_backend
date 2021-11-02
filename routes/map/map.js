const express = require("express");
const mapController = require("../../controllers/map/mapMarks");
const router = express.Router();

router.get("/get-marks", mapController.getMarks);
router.get("/get-user-marks", mapController.getUserMarks);
router.post("/new-mark", mapController.addNewMark);
router.patch('/change-mark', mapController.changeMark);
router.delete('/delete-mark', mapController.deleteMark);

module.exports = router;