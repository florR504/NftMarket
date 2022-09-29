
const db = require('../database/models');
const {validationResult} = require('express-validator')
const sequelize = db.sequelize;

const productos = {
  coleccion: async function(req, res){
    const nftsList = await db.Nfts.findAll()
    res.render('coleccion', {products : nftsList});
    
},
  detalle: async function(req, res){
    const idProduct = parseInt(req.params.id, 10);
    const producto = await db.Nfts.findByPk(idProduct,{
      include: [{
          association : 'coleccion'
      }]
  })
  res.render('productDetail', {producto: producto})
},
  crear: async function(req, res){
  const coleccion = await db.Coleccion.findAll()
  res.render('createproduct', {coleccion: coleccion})
},
  store: async function (req, res){
    let errores = validationResult(req)
    const coleccion = await db.Coleccion.findAll()
    if(errores.isEmpty()){
      await db.Nfts.create({
        name: req.body.name,
        price: req.body.price,
        coleccion_id: req.body.coleccion,
        image: '/uploads/' + req.file.filename,
        oddity: req.body.oddity,

    })
  res.redirect('/productos')
}else{
  res.render('createproduct', {errores : errores.mapped(), coleccion: coleccion})
}
 
  
},
editForm: async function(req, res){
  const idProduct = parseInt(req.params.id, 10);
  const producto = await db.Nfts.findByPk(idProduct,{
      include: [{
          association : 'coleccion'
      }]
  })
  res.render('editProduct', {product: producto})
},
edit: async function (req, res){
  let errores = validationResult(req)
  const idProducto = parseInt(req.params.id, 10);
  
   await db.Nfts.update({
      name: req.body.name,
      price: req.body.price,
      image: '/uploads/' + req.file.filename,
      oddity: req.body.oddity,
  },{
      where:{
          idNFTs: idProducto
      }
  })
  await res.redirect(`/productos/productDetail/${idProducto}`)
},
eliminar: async function(req, res){
  const idParseado = parseInt(req.params.id, 10)
  await db.Nfts.destroy({
      where: {idNFTs: idParseado}
  })
  res.redirect('/productos')
}
  
};

module.exports = productos;
