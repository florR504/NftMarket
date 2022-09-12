const User = require('../LogicUserModel/User');
const bcryptjs = require('bcryptjs')

const user = {
    ingresar:(req, res)=>{ res.render('login') },
    process: (req, res) => {
    let userToLogin = User.findByField('email', req.body.email)
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
    profile: (req, res) => {
        //le comparto la informacion de session a la vista
        res.render('perfil', { user: req.session.userLogged })
    },
    logout:(req, res) =>{
      req.session.destroy();//borra todo lo que se encuentre en session
      return res.redirect('/home');
    },
    inicio: (req, res) => { res.render('registro') },
     
    guardar: (req, res) => {
          const errores = validationResult(req);
          console.log(req.body)
          if(errores.isEmpty()){
          //Si no hay errores pero el email ya esta en la base de datos,
          //debe saltar el error de que ya se encuentra registrado el email
          let userInDB = User.findByField('email', req.body.email);
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
          
          User.create(userToCreate)
          res.redirect("/home");
    }else {
         
          res.render('registro', {errores: errores.mapped(), old: req.body})
    
          }
    }
    
}
module.exports= user;