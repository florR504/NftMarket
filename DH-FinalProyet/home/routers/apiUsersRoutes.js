const express= require('express');
const router = express.Router();
const dataBaseUsers = require('../controllers/dataBaseUserController')

router.get('/users', dataBaseUsers.allUsers)

router.get('/users/search', dataBaseUsers.userByName)
router.get('/users/:id', dataBaseUsers.oneUser)


module.exports = router;