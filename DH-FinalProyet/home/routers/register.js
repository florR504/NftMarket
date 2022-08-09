const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const upload = require('../middlewares/multerMiddleware');
const validateRegister = require('../middlewares/validationsRegisterMiddleware');

router.get('/', registerController.inicio)
router.post('/',upload.single('avatar'),validateRegister, registerController.guardar)

module.exports = router;