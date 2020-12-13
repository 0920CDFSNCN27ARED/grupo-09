const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productController');
const { route } = require('./mainRoutes');

router.get('/', productsController.index);

router.get('/create', productsController.showCreate);

router.get('/:id', productsController.getOne);

router.get('/:id/edit', productsController.showEdit);

router.post('/', productsController.create);

router.put('/id', productsController.edit);

module.exports = router;
