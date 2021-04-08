const express = require('express');
const router = express.Router();

const productAPIController = require('../../controllers/api/productController');

router.get('/', productAPIController.index);
router.get('/:id', productAPIController.getOne);
router.get('/cart', productAPIController.getCart);

module.exports = router;
