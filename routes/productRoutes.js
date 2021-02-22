const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
let db = require('../database/models');

const assertSignedOut = require('../middlewares/auth/assert-signed-out');
const assertSignedIn = require('../middlewares/auth/assert-signed-in');
const assertIsAdmin = require('../middlewares/auth/assert-is-admin');

const imagesPath = path.resolve(__dirname, '../public/img/products/');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

const productsController = require('../controllers/productController');
const { route } = require('./mainRoutes');

router.get('/', productsController.index);

router.get(
  '/create',
  // assertSignedIn,
  // assertIsAdmin,
  productsController.showCreate
);

router.get('/:id', productsController.getOne);

router.get(
  '/:id/edit',
  assertSignedIn,
  assertIsAdmin,
  productsController.showEdit
);

router.post(
  '/',
  // assertSignedIn,
  // assertIsAdmin,
  upload.single('image'),
  productsController.create
);

router.put(
  '/:id',
  assertSignedIn,
  assertIsAdmin,
  upload.single('image'),
  productsController.edit
);

router.delete('/:id', assertSignedIn, assertIsAdmin, productsController.delete);

module.exports = router;
