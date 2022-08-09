const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs')
const User = require('../LogicUserModel/User.js')

const register = {
      inicio: (req, res) => { res.render('registro') },
     
      guardar: (req, res) => {
            const errores = validationResult(req);

            if(errores.isEmpty()){
            //Si no hay errores pero el email ya esta en la base de datos,
            //debe saltar el error de que ya se encuentra registrado el email
            let userInDB = User.findByField('emailU', req.body.emailU);
            if(userInDB){
                return res.render('registro', {errores:{emailU:{msg: 'Este email ya esta registrado'}},
                old: req.body
                });
            }
            
            let hash = req.body.contraseniaU;
            let userToCreate = {
                  ... req.body,
                  contraseniaU:bcryptjs.hashSync( hash, 10) ,
                  avatar:req.file.filename
            }
            
            User.create(userToCreate)
            res.redirect("/home");
      }else {
            res.render('registro', {errores: errores.mapped(), old: req.body})
      
            }
      }
}

module.exports = register;