module.exports = function(sequelize, dataTypes){
 const alias = 'Nfts'
 const cols = {
    idNFTs: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    name: {
        type: dataTypes.STRING(45),
        allowNull: true
    },
    price:{
        type: dataTypes.INTEGER,
        allowNull: true
    },
    image:{
        type: dataTypes.STRING(45),
        allowNull: true
    },
    oddity: {
        type: dataTypes.INTEGER,
        allowNull: true
    },
    coleccion_id: {
        type: dataTypes.INTEGER,
        allowNull: true
    },
    saleDetail_id: {
        type: dataTypes.INTEGER,
        allowNull: true
    },
};
const config = {tablename:'nfts', timestamps: false };

const Nfts = sequelize.define(alias,cols, config );
//relaciones entre tablas
Nfts.associate = function(models){
    Nfts.belongsTo(models.Coleccion, {
        as:'coleccion',
        foreignKey: 'coleccion_id'
    })
   /* Nfts.belongsToMany(models.Sales, {
        as:'sales',
        through: 'SaleDetail',
        foreignKey: 'nft_id',
        otherKey: 'sale_id',
        timestamps: false
    })*/
}
return Nfts;

}