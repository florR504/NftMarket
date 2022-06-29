
 const productos = {
       coleccion : (req, res) => {res.render('coleccion')},
       detalle1 : (req, res) => {res.render('productDetail1')},
       detalle2 : (req, res) => {res.render('productDetail2')},
       detalle3 : (req, res) => {res.render('productDetail3')},
       detalle4 : (req, res) => {res.render('productDetail4')},
       detalle5 : (req, res) => {res.render('productDetail5')},
       detalle6 : (req, res) => {res.render('productDetail6')},
       detalle7 : (req, res) => {res.render('productDetail7')},
       detalle8 : (req, res) => {res.render('productDetail8')},
       detalle9 : (req, res) => {res.render('productDetail9')},
       detalle10 : (req, res) => {res.render('productDetail10')},
       detalle11 : (req, res) => {res.render('productDetail11')},
       detalle12 : (req, res) => {res.render('productDetail12')},
       crear: (req, res) => {res.render('createproduct')}
 }

 module.exports = productos;