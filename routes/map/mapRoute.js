const express = require("express");
const mapController = require("../../controllers/map/getMarks");
const router = express.Router();

router.get("/get-marks", mapController.getMarks);
router.post("/new-mark", mapController.addNewMark);

module.exports = router;