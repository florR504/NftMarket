let DB = require("../database/models");

const Op = DB.Sequelize.Op;
const Users = DB.User;

const DataBaseUser = {
  allUsers: async (req, res) => {
    const usuarios = await Users.findAll();
    let userToSend = [];
    let count = usuarios.length;

    usuarios.forEach((user) => {
      let userInfoToSend = {
        id: user.id,
        name: user.name,
        email: user.email,
        detail: "http://localhost:3030/api/users/" + user.id 
      };

      userToSend.push(userInfoToSend);
    });
    res.status(200).json({
      status: 200,
      count: count,
      users: userToSend,
  
    });
  },
  oneUser: async (req, res) => {
    const id = req.params.id;
    const userInformation = await Users.findOne({
      where: {
        id: id
      }
    })
    res.status(200).json({
      id: userInformation.id,
      name: userInformation.name,
      lastName: userInformation.lastName,
      email: userInformation.email,
      avatar: "http://localhost:3031/imagenes/" + userInformation.avatar

  })
  },
  userByName: async (req, res) => {
    const name = req.query.name;
    return res.send(
      await Users.findAll({ where: { name: { [Op.like]: "%" + name + "%" } } })
    );
  },
};
module.exports = DataBaseUser;
