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
  body('email').custom(async function (value) {
    let userExists = await costumersService.findOneLogin(value);
    if (userExists) {
      return Promise.reject('El email ya esta registrado');
    }
  }),
];

module.exports = registerValidation;
