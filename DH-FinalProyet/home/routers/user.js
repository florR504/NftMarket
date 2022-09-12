const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require('../middlewares/multerMiddleware');
const validateRegister = require('../middlewares/validationsRegisterMiddleware');


router.get('/',guestMiddleware, userController.ingresar)
router.post('/', userController.process)
router.get('/profile',authMiddleware, userController.profile)
router.get('/logout', userController.logout)
router.get('/register',guestMiddleware, userController.inicio)
router.post('/register',upload.single('avatar'),validateRegister, userController.guardar)

module.exports = router;