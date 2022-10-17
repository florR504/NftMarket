const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const productCreateValidation = require('../middlewares/productCreateValidation');
const productEditValidation = require('../middlewares/productEditValidation')

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        const rutaUpload = path.resolve(__dirname, '../public/imagenes')
        cb(null, rutaUpload)
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

router.get('/coleccion/:id', productsController.coleccion);
router.get('/productDetail/:id', productsController.detalle);
router.get('/createProduct', productsController.crear);
router.post('/createProduct', upload.single("imagen"),productCreateValidation, productsController.store);
router.get('/productDetail/:id/edit', productsController.editForm)
router.put('/productDetail/:id/edit', upload.single("imagen"),productEditValidation, productsController.edit)
router.get('/cart', productsController.cart);

router.delete('/productDetail/:id/delete', productsController.eliminar);


module.exports = router;