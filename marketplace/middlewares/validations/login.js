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
  body('email').custom(async function (value) {
    let userExists = await costumersService.findOneLogin(value);
    if (!userExists) {
      return Promise.reject('El email no esta registrado');
    }
  }),
];

module.exports = registerValidation;
