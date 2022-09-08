module.exports = function(sequelize, dataTypes){
    const alias = 'Avatars'
    const cols = {
       id: {
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: true
       },
       avatar_name: {
           type: DataTypes.STRING(45),
           allowNull: true
       },
       user_id:{
           type: DataTypes.INTEGER,
           allowNull: true
       }
   };
   const config = {tablename:'avatars', timestamps: false };
   
   const Avatars = sequelize.define(alias,cols, config );

   Avatars.associate = function(models){
    Avatars.belongsTo(models.user_id,{
        as: 'user_avatar',
        foreignKey: 'user_id'
    })
   }
   
   return Avatars;
   }