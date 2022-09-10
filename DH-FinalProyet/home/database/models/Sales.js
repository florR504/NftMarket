module.exports = function(sequelize, dataTypes){
    const alias = 'Sales'
    const cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: true
       },
       /*date: {
           type: dataTypes.date,
           allowNull: true
       },*/
       payment_method:{
           type: dataTypes.STRING(45),
           allowNull: true
       },
       price:{
           type: dataTypes.STRING(45),
           allowNull: true
       },
       user_id_sale:{
           type: dataTypes.INTEGER,
            allowNull: true
       }
   };
   const config = {tablename:'sales', timestamps: false };
   
   const Sales = sequelize.define(alias,cols, config );
   
   return Sales;
   }