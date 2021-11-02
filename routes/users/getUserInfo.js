const express = require("express");
const userController = require("../../controllers/users/users");
const router = express.Router();

router.get("/get-user-info", userController.getUserInfo);
router.get("/get-users-list", userController.getUserList);

module.exports = router;
