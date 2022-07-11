const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productos = {
  coleccion: (req, res) => {
    res.render("coleccion", { products });
  },

  detalle: (req, res) => {
    const idProduct = req.params.id;
    console.log ("ID DE PRODUCTO", idProduct);
    const producto = products.filter (function(elemento) {
      if (idProduct == elemento.id) {
        return elemento;
      }
    });
    console.log ("PRODUCTO", producto [0]);
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
    productsJson = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, productsJson);
    res.redirect("/productos");
  },
  editForm:(req, res) =>{
     res.render("editProduct", {products})
  },
  editar:(req,res)=> {
    let idIngresado = req.params.id

    for(i = 0; i < products.length; i ++){
      if(products[i].id == idIngresado){
        products[i].name = req.body.name,
        products[i].price = req.body.price,
        products[i].oddity = req.body.oddity,
        products[i].imagen = '/uploads/' + req.file.filename
      }
    }
    res.redirect('/productos')
  }
};

module.exports = productos;
