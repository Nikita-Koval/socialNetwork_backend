const express = require("express");
const registrationController = require("../../controllers/auth/registration");
const router = express.Router();

router.post("/registration", registrationController.register);

module.exports = router;