const {check} = require('express-validator');
const validateRegister = [
    check('nombreU').notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({min: 3}).withMessage('El nombre debe ser más largo'),
    check('apellidoU').notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({min: 2}).withMessage('El apellido debe ser más largo'),
    check('emailU').notEmpty().withMessage('Por favor, completa tu email').bail()
    .isEmail().withMessage('El formatop ingresado no es válido'),
    check('contraseniaU').notEmpty().withMessage('Por favor escribe tu contraseña'),
   
]

module.exports = validateRegister;