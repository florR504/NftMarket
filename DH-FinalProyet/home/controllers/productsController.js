const { validationResult } = require("express-validator");
const db = require('../database/models')
const sequelize = db.sequelize;

const productos = {
  coleccion: async function (req, res) {
    const id = parseInt(req.params.id, 10);
    if (id === 1){
      const nftsList = await db.Nfts.findAll({where: {coleccion_id: id}});
      const image = "bored-ape/";
      return res.render("coleccion", { products: nftsList, image, coleccionName: 'Bored Ape' });
    }else if (id === 2){
      const nftsList = await db.Nfts.findAll({where: {coleccion_id: id}});
      const image = "CyberKongz VX/";
      return res.render("coleccion", { products: nftsList, image, coleccionName: 'CyberKongz' });
    }else if (id === 3){
      const nftsList = await db.Nfts.findAll({where: {coleccion_id: id}});
      const image = "ethilizards/";
      return res.render("coleccion", { products: nftsList, image, coleccionName: 'Ethilizars' });
    }else if (id === 4){
      const nftsList = await db.Nfts.findAll({where: {coleccion_id: id}});
      const image = "Edifice/";
      return res.render("coleccion", { products: nftsList, image, coleccionName: 'Edifice' });
    };
  
    res.render("coleccion", { products: nftsList  });
  },
  detalle: async function (req, res) {
    const idProduct = parseInt(req.params.id, 10);
      const producto = await db.Nfts.findByPk(idProduct, {
        include: [
          {
            association: "coleccion",
          },
        ],
      });
      if (producto.dataValues.coleccion_id == 1){
        const image = "bored-ape/";
        return res.render("productDetail", { producto: producto, image });
      }else if (producto.dataValues.coleccion_id == 2){
        const image = "CyberKongz VX/";
        return res.render("productDetail", { producto: producto, image });
      }else if (producto.dataValues.coleccion_id == 3){
        const image = "ethilizards/";
        return res.render("productDetail", { producto: producto, image });
      }else if (producto.dataValues.coleccion_id == 4){
        const image = "Edifice/";
        return res.render("productDetail", { producto: producto, image });
      }
  },
  crear: async function (req, res) {
    const col = await db.Coleccion.findAll();
    res.render("createproduct", { coleccion: col });
  },
  store: async function (req, res) {
    let errores = validationResult(req);
    const coleccion = await db.Coleccion.findAll();
    if (errores.isEmpty()) {
      await db.Nfts.create({
        name: req.body.name,
        price: req.body.price,
        coleccion_id: req.body.coleccion,
        image: req.file.filename,
        oddity: req.body.oddity,
      });
      res.redirect("/productos/coleccion/1");
    } else {
      res.render("createproduct", {
        errores: errores.mapped(),
        coleccion: coleccion,
      });
    }
  },
  editForm: async function (req, res) {
    const idProduct = parseInt(req.params.id, 10);
    const producto = await db.Nfts.findByPk(idProduct, {
      include: [
        {
          association: "coleccion",
        },
      ],
    });
    res.render("editProduct", { product: producto });
  },
  edit: async function (req, res) {
    const idProduct = parseInt(req.params.id, 10);
    const producto = await db.Nfts.findByPk(idProduct, {
      include: [
        {
          association: "coleccion",
        },
      ],
    });
    let errores = validationResult(req);
    const idProducto = parseInt(req.params.id, 10);
    if (errores.isEmpty()) {
      await db.Nfts.update(
        {
          name: req.body.name,
          price: req.body.price,
          image: "/uploads/" + req.file.filename,
          oddity: req.body.oddity,
        },
        {
          where: {
            idNFTs: idProducto,
          },
        }
      );
      await res.redirect(`/productos/productDetail/${idProducto}`);
    } else {
      res.render("editProduct", {
        product: producto,
        errores: errores.mapped(),
      });
    }
  },
  eliminar: async function (req, res) {
    const idParseado = parseInt(req.params.id, 10);
    await db.Nfts.destroy({
      where: { idNFTs: idParseado },
    });
    res.redirect("/home");
  },
};
module.exports = productos;