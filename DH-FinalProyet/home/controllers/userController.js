const User = require('../LogicUserModel/User');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const {validationResult} = require('express-validator')

const user = {
    //login
    ingresar:(req, res)=>{ res.render('login') },
    process: async function (req, res){
    let userToLogin = await db.User.findOne({
        where: {
            email: req.body.email
        }
    });

    if(userToLogin){
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
       if(isOkThePassword){
        delete userToLogin.password //por seguridad del usuario
        req.session.userLogged = userToLogin;
        return res.redirect('/profile')
       }
    }
    return res.render('login', {errors:{email:{msg:'Las credenciales son inválidas'}}})
        

    },
    //perfil de usuario
    profile: (req, res) => {
        //le comparto la informacion de session a la vista
        res.render('perfil', { user: req.session.userLogged })
    },
    logout:(req, res) =>{
      req.session.destroy();//borra todo lo que se encuentre en session
      return res.redirect('/home');
    },
    
    //registro
    inicio: (req, res) => { res.render('registro') },

    guardar: async function (req, res){
        const errores = validationResult(req);
    
        if(errores.isEmpty()){
          //Si no hay errores pero el email ya esta en la base de datos,
          //debe saltar el error de que ya se encuentra registrado el email
            let userInDB = await db.User.findOne({
            where:{
                email : req.body.email
                
            }
        });
        if(userInDB){
            return res.render('registro', {errores:{email:{msg: 'Este email ya esta registrado'}},
            old: req.body
            });
          }
          
        let hash = req.body.password;

        let userToCreate = {
            
            ... req.body,
            password:bcryptjs.hashSync( hash, 10) ,
            avatar:req.file.filename
        }
        console.log(req.body.lastName)
     
          
        db.User.create(userToCreate)
        
        res.redirect("/home");
    }else {
         
        res.render('registro', {errores: errores.mapped(), old: req.body})
    
          }
    }
    
}
module.exports= user;