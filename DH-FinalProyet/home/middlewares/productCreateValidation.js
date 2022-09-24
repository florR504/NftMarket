const {body} = require('express-validator');
const validateProduct = [
    body('titulo').notEmpty().withMessage('Debes completar el titulo').bail()
    .isLength({min: 3}).withMessage('El titulo debe ser más largo'),
    body('oddity').notEmpty().withMessage('Debes completar el nivel de rareza'),
    body('price').notEmpty().withMessage('Por favor, completa el Precio'),
   
   
]

module.exports = validateProduct;