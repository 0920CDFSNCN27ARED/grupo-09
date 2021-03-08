const { check, validationResult, body } = require('express-validator');
let costumersService = require('../../services/customersService');

let registerValidation = [
  check('first_name')
    .isLength({ min: 2, max: 40 })
    .withMessage('El nombre debe tener al menos dos caracteres'),
  check('last_name')
    .isLength({ min: 2, max: 40 })
    .withMessage('El nombre debe tener al menos dos caracteres'),
  check('email').isEmail().withMessage('Email invalido'),
  check('pass')
    .isLength({ min: 8, max: 40 })
    .isAlphanumeric()
    .withMessage(
      'Contraseña inválida: minimo 8 caracteres,letras(a-zA-Z) y números '
    ),
  body('email')
    .custom(async function (value) {
      /* toda la parta de DB para averiguar si el mail existe*/
      let checkDB = await costumersService.findOneLogin(value);
      console.log(checkDB);
      if (checkDB != null) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage('Este email ya esta registrado.'),
];

module.exports = registerValidation;
