module.exports = function(sequelize, dataTypes){
    const alias = 'User'
    const cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
          
           allowNull: true
       },
       name: {
           type: dataTypes.STRING(45),
           allowNull: true
       },
       lastName:{
           type: dataTypes.STRING(45),
           allowNull: true
       },
       email:{
           type: dataTypes.STRING(45),
           allowNull: true
       },
       password: {
           type: dataTypes.STRING(255),
           allowNull: true
       },
       avatar: {
           type: dataTypes.STRING(100),
           allowNull: true,
           
       },
       type_of_user: {
           type: dataTypes.STRING(45),
           allowNull: true
       },
   };
   const config = {tablename:'user', timestamps: false };
   
   const User = sequelize.define(alias,cols, config );


   
   return User;
   }