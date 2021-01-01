const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/img/products');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.filename));
  },
});

var upload = multer({ storage: storage });

const productsController = require('../controllers/productController');
const { route } = require('./mainRoutes');

router.get('/', productsController.index);

router.get('/create', productsController.showCreate);

router.get('/:id', productsController.getOne);

router.get('/:id/edit', productsController.showEdit);

router.post('/', upload.any(), productsController.create);

router.put('/:id', productsController.edit);

router.delete('/:id', productsController.delete);

module.exports = router;
