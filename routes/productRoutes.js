const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productController');

router.get('/', productsController.index);

router.get('/detail/:id', productsController.detail);

module.exports = router;
