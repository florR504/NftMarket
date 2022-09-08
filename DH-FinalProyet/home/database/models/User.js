module.exports = function(sequelize, dataTypes){
    const alias = 'User'
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
       last_name:{
           type: DataTypes.STRING(45),
           allowNull: true
       },
       email:{
           type: DataTypes.STRING(45),
           allowNull: true
       },
       password: {
           type: DataTypes.STRING(255),
           allowNull: true
       },
       avatar_id: {
           type: DataTypes.INTEGER,
           allowNull: true
       },
       type_of_user: {
           type: DataTypes.STRING(45),
           allowNull: true
       },
   };
   const config = {tablename:'user', timestamps: false };
   
   const User = sequelize.define(alias,cols, config );

   User.associate = function(models){
    User.belongsTo(models.avatar_id,{
        as: 'avatar_user',
        foreignKey: 'avatar_id'
    })
   }
   
   return User;
   }