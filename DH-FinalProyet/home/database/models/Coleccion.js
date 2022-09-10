module.exports = function(sequelize, dataTypes){
    const alias = 'Coleccion'
    const cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: true
       },
       name: {
           type: dataTypes.STRING(45),
           allowNull: true
       },
       banner_image:{
           type: dataTypes.INTEGER,
           allowNull: true
       },
       description:{
           type: dataTypes.STRING(300),
           allowNull: true
       }
   };
   const config = {tablename:'coleccion', timestamps: false };
   
   const Coleccion = sequelize.define(alias,cols, config );
 
   Coleccion.associate = function(models){
    Coleccion.hasMany(models.Nfts, {
        as:'nfts',
        foreignKey: 'coleccion_id'
    })
    }
   
   return Coleccion;
   }