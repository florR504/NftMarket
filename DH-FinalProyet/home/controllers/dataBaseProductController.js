let DB = require('../database/models');

const Op = DB.Sequelize.Op;
const Products = DB.Nfts;


const DataBase = {
    nfts: async (req, res) => {
        return res.send( await Products.findAll());
    },
    oneNft: async (req, res) => {
        const id = req.params.id;
        return res.send(await Products.findOne({where:{idNFTs : id}}) )
    },
    nftByName: async (req,res) =>{
        const name = req.query.name;
        return res.send(await Products.findAll({where: {name: {[Op.like]: '%' + name + '%'}}}))

    }
}
module.exports = DataBase;