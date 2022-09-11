const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        const rutaUpload = path.resolve(__dirname, '../public/uploads')
        cb(null, rutaUpload)
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

router.get('/', productsController.coleccion);
router.get('/productDetail/:id', productsController.detalle);
router.get('/createProduct', productsController.crear );
router.post('/createProduct', upload.single("imagen"), productsController.store );
router.get('/productDetail/:id/edit', productsController.editForm)
router.delete('/productDetail/:id/delete', productsController.eliminar);
/*router.get('/createProduct', productsController.crear );
router.post('/createProduct', upload.single("imagen"), productsController.store );
router.get('/productDetail/:id/edit', productsController.editForm);
router.put('/productDetail/:id/edit', upload.single("imagen"), productsController.editar);*/

module.exports = router;