module.exports = function(sequelize, dataTypes){
    const alias = 'SaleDetail'
    const cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: true
       },
       nft_id: {
           type: dataTypes.INTEGER,
           allowNull: true
       },
       sale_id:{
           type: dataTypes.INTEGER,
           allowNull: true
       },
       precio:{
           type: dataTypes.STRING(45),
           allowNull: true
       }
   };
   const config = {tablename:'saledetail', timestamps: false };
   
   const SaleDetail = sequelize.define(alias,cols, config );
   
   return SaleDetail;
   }