const User = require('../LogicUserModel/User');
const bcryptjs = require('bcryptjs')

const login = {
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
    }
    
}
module.exports= login;