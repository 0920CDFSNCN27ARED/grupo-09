const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const assertSignedOut = require('../middlewares/auth/assert-signed-out');
const assertSignedIn = require('../middlewares/auth/assert-signed-in');

const registerValidation = require('../middlewares/validations/register');
const loginValidation = require('../middlewares/validations/login');

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

router.post('/register', registerValidation, usersController.register);

router.post('/login', loginValidation, usersController.login);

router.get('/logOut', usersController.logOut);

module.exports = router;
