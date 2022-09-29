const {body} = require('express-validator');
const validateEditProduct = [
    body('name').notEmpty().withMessage('Debes completar el titulo').bail()
    .isLength({min: 3}).withMessage('El titulo debe ser más largo'),
    body('price').notEmpty().withMessage('Debes completar el nivel de rareza'),
    body('oddity').notEmpty().withMessage('Por favor, completa el Precio'),
   
   
]

module.exports = validateEditProduct;