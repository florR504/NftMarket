const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const productjsonRepository = require('../repositories/productJsonRepository')

const productos = {
  coleccion: (req, res) => {
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
    /*products.push(newProduct);
    productsJson = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsJson);*/
    productjsonRepository.save(newProduct);

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
  
    /*let productsJson = JSON.stringify(products, null, 4)
    fs.writeFileSync(productsFilePath, productsJson)*/
  
    productjsonRepository.change(products);
    res.redirect('/productos')
  },
  eliminar:(req, res) =>{
    const IdEliminar = req.params.id;
    let newProducts = products.filter(function(nft){
      return nft.id != IdEliminar;
  })
   /*let productsJson = JSON.stringify(newProducts, null, 4)
   fs.writeFileSync(productsFilePath, productsJson)*/

   productjsonRepository.delete(newProducts);
   res.redirect('/productos')
   
  }
};

module.exports = productos;
