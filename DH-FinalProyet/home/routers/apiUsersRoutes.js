const express= require('express');
const router = express.Router();
const dataBaseUsers = require('../controllers/dataBaseUserController')

router.get('/', dataBaseUsers.allUsers)
router.get('/search', dataBaseUsers.userByName)
router.get('/:id', dataBaseUsers.oneUser)


module.exports = router;