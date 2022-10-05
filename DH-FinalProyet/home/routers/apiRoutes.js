const express= require('express');
const router = express.Router();
const dataBase = require('../controllers/dataBaseProductController')

router.get('/', dataBase.nfts)
router.get('/search', dataBase.nftByName)
router.get('/:id', dataBase.oneNft)


module.exports = router;
