const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.coleccion);
router.get('/productDetail1', productsController.detalle1);
router.get('/productDetail2', productsController.detalle2);
router.get('/productDetail3', productsController.detalle3);
router.get('/productDetail4', productsController.detalle4);
router.get('/productDetail5', productsController.detalle5);
router.get('/productDetail6', productsController.detalle6);
router.get('/productDetail7', productsController.detalle7);
router.get('/productDetail8', productsController.detalle8);
router.get('/productDetail9', productsController.detalle9);
router.get('/productDetail10', productsController.detalle10);
router.get('/productDetail11', productsController.detalle11);
router.get('/productDetail12', productsController.detalle12);
router.get('/createProduct', productsController.crear )

module.exports = router;