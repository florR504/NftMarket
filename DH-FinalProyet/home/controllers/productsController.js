const path = require('path');
 const productos = {
       coleccion : (req, res) => {res.sendFile(path.resolve(__dirname, '../views/coleccion.html'))},
       detalle : (req, res) => {res.sendFile(oath.resolve(__dirname, '../views/productDetail/productDetail.html'))}

 }

 module.exports = productos;