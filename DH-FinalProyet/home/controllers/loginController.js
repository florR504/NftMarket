
const {validationResult} = require('express-validator')

const login = {
    ingresar:(req, res)=>{ res.render('login') },
    process: (req, res) => {
       const resultValidation = validationResult(req);
       if(resultValidation.isEmpty()){
      
       res.redirect('/home')
       }else{
        res.render('login', {errors: resultValidation.mapped()})
       }

    }
    
}
module.exports= login;