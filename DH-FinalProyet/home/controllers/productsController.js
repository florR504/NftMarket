
 const productos = {
       coleccion : (req, res) => {res.render('coleccion')},
       detalle : (req, res) => {res.render('productDetail')},
       crear: (req, res) => {res.render('createproduct')}
 }

 module.exports = productos;