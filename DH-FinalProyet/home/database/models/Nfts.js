module.exports = function(sequelize, dataTypes){
 const alias = 'Nfts'
 const cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image:{
        type: DataTypes.STRING(45),
        allowNull: true
    },
    oddity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    coleccion_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    saleDetail_id: {
        type: DataTypes.INTEGER,
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