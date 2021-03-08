const { check, validationResult, body } = require('express-validator');

let productValidation = [
  check('name')
    .isLength({ min: 5, max: 40 })
    .withMessage('El nombre debe tener al menos 5 caracteres.'),
  check('description')
    .isLength({ min: 20 })
    .withMessage('La descripcion debe tener al menos 20 caracteres.'),
  body('image')
    .custom((value, { req }) => {
      if (req.file != undefined) {
        const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
      }

      return true;
    })
    .withMessage(
      'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG'
    ),
];

module.exports = productValidation;
