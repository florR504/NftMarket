const {check} = require('express-validator');
const validateRegister = [
    check('name').notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({min: 3}).withMessage('El nombre debe ser más largo'),
    check('lastName').notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({min: 2}).withMessage('El apellido debe ser más largo'),
    check('email').notEmpty().withMessage('Por favor, completa tu email').bail()
    .isEmail().withMessage('El formatop ingresado no es válido'),
    check('password').notEmpty().withMessage('Por favor escribe tu contraseña'),
   
]

module.exports = validateRegister;