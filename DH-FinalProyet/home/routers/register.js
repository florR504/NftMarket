const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/', registerController.inicio)

module.exports = router;