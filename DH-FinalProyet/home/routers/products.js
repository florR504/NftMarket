const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.coleccion);
router.get('/productDetail', productsController.detalle);
router.get('/createProduct', productsController.crear )

module.exports = router;