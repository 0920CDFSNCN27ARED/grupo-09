const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {check, validationREsult, body} = require ('express-validator');
const fs = require('fs');

const assertSignedOut = require('../middlewares/auth/assert-signed-out');
const assertSignedIn = require('../middlewares/auth/assert-signed-in');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/img/users');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.filename));
  },
});

var upload = multer({ storage: storage });

const usersController = require('../controllers/userController');
const { route } = require('./mainRoutes');

router.get('/login', assertSignedOut, usersController.showLogin);

router.get('/register', assertSignedOut, usersController.showRegister);

router.post('/register', [
  check('first_name').isLength({min:2}).withMessage('Este campo debe tener mas de 2 caracteres'),
  check('first_name').isEmpty().withMessage('Este campo debe estar completo'),
  body('email').custom(function(value){
    /* toda la parta de DB para averiguar si el mail existe*/
  })
], usersController.register);


router.post('/login', usersController.login);

router.get('/logOut', usersController.logOut);

module.exports = router;
