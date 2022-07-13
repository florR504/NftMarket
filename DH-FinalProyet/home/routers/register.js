const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
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

router.get('/', registerController.inicio)
router.post('/',upload.any(), registerController.guardar)

module.exports = router;