const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const loginValidations = require('../middlewares/loginValidationsMiddleware');


router.get('/', loginController.ingresar)
router.post('/', loginValidations, loginController.process)


module.exports = router;