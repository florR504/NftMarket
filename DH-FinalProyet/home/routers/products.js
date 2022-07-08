const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        const rutaUpload = path.resolve(__dirname, '../public/uploads')
        console.log(rutaUpload)
        cb(null, rutaUpload)
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

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

router.get('/createProduct', productsController.crear );
router.post('/createProduct', upload.single("imagen"), productsController.store );
router.get('/productDetail1/:id/edit', productsController.editForm);
router.put('/productDetail1/:id/edit',upload.single("imagen"), productsController.editar);

module.exports = router;