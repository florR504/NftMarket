const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        const rutaUpload = path.resolve(__dirname, '../public/uploads')
        cb(null, rutaUpload);
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

module.exports = upload;