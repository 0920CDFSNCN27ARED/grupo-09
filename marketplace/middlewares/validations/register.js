const { check, validationResult, body } = require('express-validator');
let costumersService = require('../../services/customersService');

let registerValidation = [
  check(['first_name', 'last_name'])
    .isLength({ min: 2 })
    .withMessage('Este campo debe tener mas de 2 caracteres'),
  check(['first_name', 'last_name', 'email', 'pass'])
    .notEmpty()
    .withMessage('Este campo debe estar completo'),
  check('email').isEmail().withMessage('Este campo debe ser un email válido'),
  body('email')
    .custom(async function (value) {
      /* toda la parta de DB para averiguar si el mail existe*/
      let checkDB = await costumersService.findOneLogin(value);
      if (checkDB != null) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage('Este email ya esta registrado.'),
];

module.exports = registerValidation;
