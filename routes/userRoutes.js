const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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

module.exports = router;
