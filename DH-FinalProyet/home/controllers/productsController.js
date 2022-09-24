const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const productjsonRepository = require('../repositories/productJsonRepository')
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
  /*coleccion: (req, res) => {
    res.render("coleccion", { products: products });
  },

  detalle: (req, res) => {
    const idProduct = req.params.id;
    const producto = products.filter (function(elemento) {
      if (idProduct == elemento.id) {
        return elemento;
      }
    });
  
    res.render ("productDetail", {producto: producto[0]});
  },
    
  crear: (req, res) => {
    res.render("createproduct");
  },
  store: (req, res) => {
    let newProduct = {
      id: Math.max(...products.map((e) => e.id)) + 1,
      name: req.body.name,
      price: req.body.price,
      oddity: req.body.oddity,
      imagen: '/uploads/' + req.file.filename,
    };
    
    products.push(newProduct);
    const productsJson = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsJson);

    res.redirect("/productos");

  },
  
  editForm:(req, res) =>{
    const idProduct = req.params.id;
    const product = products.filter(function(elemento) {
      if (idProduct == elemento.id) {
        return elemento;
      }
    });
     res.render("editProduct", {product: product[0]})
  },
  
  editar:(req,res)=> {
    let idIngresado = parseInt(req.params.id, 10);
    
    for(i = 0; i < products.length; i ++){
      if(products[i].id === idIngresado){
        products[i].name = req.body.name,
        products[i].price = req.body.price,
        products[i].oddity = req.body.oddity,
        products[i].imagen = '/uploads/' + req.file.filename
      }
    }
  
    let productsJson = JSON.stringify(products, null, 4)
    fs.writeFileSync(productsFilePath, productsJson);
    res.redirect('/productos')
  },
  eliminar:(req, res) =>{
    const IdEliminar = req.params.id;
    let newProducts = products.filter(function(nft){
      return nft.id != IdEliminar;
  })

  const productsJson = JSON.stringify(newProducts, null, 4)
  fs.writeFileSync(productsFilePath, productsJson);
  res.redirect('/productos')
   
  }*/
};

module.exports = productos;
