const express = require("express");
const mapController = require("../../controllers/map/getMarks");
const router = express.Router();

router.get("/getMarks", mapController.getMarks);

module.exports = router;