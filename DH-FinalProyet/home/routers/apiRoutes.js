const express= require('express');
const router = express.Router();
const dataBase = require('../controllers/dataBaseProductController')

router.get('/products', dataBase.nfts)
router.get('/products/search', dataBase.nftByName)
router.get('/products/oddity', dataBase.nftByOddity)
router.get('/products/:id', dataBase.oneNft)


module.exports = router;
