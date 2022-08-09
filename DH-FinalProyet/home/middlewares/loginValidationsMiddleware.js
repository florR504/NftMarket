const {check} = require('express-validator');
const loginValidations = [
    check('email_login').notEmpty().withMessage('Por favor, completa este campo'),
    check('password_login').notEmpty().withMessage('Por favor, completa este campo'),
]

module.exports = loginValidations;