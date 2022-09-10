const db = require('../database/models');
const { create } = require('../LogicUserModel/User');
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
    crear: function(){
        res.render('createproduct')
    },
    store: async function (req, res){
        db.Nfts.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            oddity: req.body.oddity,

        })
        res.redirect('/productos')
    },
    editForm: async function(req, res){
        const idProduct = parseInt(req.params.id, 10);
        const producto = await db.Nfts.findByPk(idProduct,{
            include: [{
                association : 'coleccion'
            }]
        })
        res.render('productDetail', {producto: producto})
     },
    edit: async function (req, res){
        const idProducto = req.params.id
        db.Nfts.update({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            oddity: req.body.oddity,
        },{
            where:{
                id: idProducto
            }
        })
        await res.redirect(idProducto)
    },
    eliminar: async function(req, res){
        db.Nfts.destroy({
            where: {id: req.params.id}
        })
        res.redirect('/productos')
    }
}