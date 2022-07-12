const register = {
      inicio: (req, res) => { res.render('registro') },
      guardar: (req, res) => {
            const path = require("path");
            const fs = require("fs");
            const usersFilePath = path.join(__dirname, "../data/users.json");
            const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

            let usuarioNuevo = {
                  nombre: req.body.nombreU,
                  apellido: req.body.apellidoU,
                  email: req.body.emailU,
                  contrasena: req.body.contraseniaU,
            }
            users.push(usuarioNuevo)
            usersJson = JSON.stringify(users, null, 4);
            fs.writeFileSync(usersFilePath, usersJson);
            res.redirect("/registro");
      }
}

module.exports = register;