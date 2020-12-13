const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productController');

router.get('/', productsController.index);

router.get('/:id', productsController.getOne);

module.exports = router;
