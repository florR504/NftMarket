const {body} = require('express-validator');
const validateRegister = [
    body('name').notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({min: 3}).withMessage('El nombre debe ser más largo'),
    body('lastName').notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({min: 2}).withMessage('El apellido debe ser más largo'),
    body('email').notEmpty().withMessage('Por favor, completa tu email').bail()
    .isEmail().withMessage('El formato ingresado no es válido'),
    body('password').notEmpty().withMessage('Por favor escribe tu contraseña'),
   
]

module.exports = validateRegister;