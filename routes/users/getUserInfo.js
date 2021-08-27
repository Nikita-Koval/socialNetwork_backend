const express = require("express");
const userController = require("../../controllers/users/users");
const router = express.Router();

router.get("/get-user-info", userController.getUserInfo);

module.exports = router;
