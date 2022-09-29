const {body} = require('express-validator');
const validateLogin = [
  
    body('email').notEmpty().withMessage('Por favor, completa tu email').bail()
    .isEmail().withMessage('El formato ingresado no es válido'),
    body('password').notEmpty().withMessage('Por favor, completa tu contraseña')
    
   
]

module.exports = validateLogin;