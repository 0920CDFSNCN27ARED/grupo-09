const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
let costumersService = require('../../services/customersService');

let registerValidation = [
  check('email').isEmail().withMessage('Email invalido'),
  check('pass')
    .isLength({ min: 8, max: 40 })
    .withMessage(
      'Contraseña inválida: minimo 8 caracteres,letras(a-zA-Z) y números '
    ),
  body('email')
    .custom(async function (value) {
      /* toda la parta de DB para averiguar si el mail existe*/
      let checkDB = await costumersService.findOneLogin(value);
      console.log(checkDB);
      if (checkDB != null) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage('Este email no esta registrado.'),
  body('pass').custom(async function (value) {
    let user = await costumersService.findOneLogin(value);

    if (bcrypt.compareSync(value, user.password)) {
      return true;
    } else {
      return false;
    }
  }),
];

module.exports = registerValidation;
