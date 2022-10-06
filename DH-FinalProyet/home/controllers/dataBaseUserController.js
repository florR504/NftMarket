let DB = require("../database/models");

const Op = DB.Sequelize.Op;
const Users = DB.User;

const DataBaseUser = {
  allUsers: async (req, res) => {
    const usuarios = await Users.findAll();
    return res.json({
      count: usuarios.length,
      users: usuarios,
    });
  },
  oneUser: async (req, res) => {
    const id = req.params.id;
    return res.send(await Users.findOne({ where: { id: id } }));
  },
  userByName: async (req, res) => {
    const name = req.query.name;
    return res.send(
      await Users.findAll({ where: { name: { [Op.like]: "%" + name + "%" } } })
    );
  },
};
module.exports = DataBaseUser;
