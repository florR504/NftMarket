const express = require("express");
const path = require("path");
const router = express.Router();
let usersController = require('../controllers/usersController');


router.get('/', usersController.inicio);

module.exports = router;

