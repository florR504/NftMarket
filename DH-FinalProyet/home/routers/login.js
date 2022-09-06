const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/',guestMiddleware, loginController.ingresar)
router.post('/', loginController.process)
router.get('/profile',authMiddleware, loginController.profile)
router.get('/logout', loginController.logout)


module.exports = router;