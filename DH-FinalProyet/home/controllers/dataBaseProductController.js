let DB = require("../database/models");

const Op = DB.Sequelize.Op;
const Products = DB.Nfts;
const Coleccion = DB.Coleccion;

const DataBase = {
  nfts: async (req, res) => {
    const allProducts = await Products.findAll({
      include: [
        {
          association: "coleccion",
        },
      ],
    });
    const allColeccions = await Coleccion.findAll({
        include:[{
            association: 'nfts'
        }]
    });
    const categories = allColeccions.forEach(coleccion => console.log(coleccion))

    const productsToSend = [];
    const count = allProducts.length;



    allProducts.forEach((product) => {
      const productInfo = {
        id: product.idNFTs,
        name: product.name,
        price: product.price,
        coleccion: product.coleccion.name,
        detail: "http://localhost:3031/api/products/" + product.idNFTs,
      };

      productsToSend.push(productInfo);
    });
    res.status(200).json({
      status: 200,
      count: count,
      //countByCategory:
      products: productsToSend,
    });
  },
  oneNft: async (req, res) => {
    const id = req.params.id;
    return res.send(await Products.findOne({ where: { idNFTs: id } }));
  },
  nftByName: async (req, res) => {
    const name = req.query.name;
    return res.send(
      await Products.findAll({
        where: { name: { [Op.like]: "%" + name + "%" } },
      })
    );
  },
};
module.exports = DataBase;
