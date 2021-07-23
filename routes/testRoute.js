const express = require('express');
const controller = require('../controllers/testController')
const router = express.Router();

router.post('/testRoute', controller.addNewNote);
//localhost:5000/api/someTest/testRoute

module.exports = router;