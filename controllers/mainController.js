let db = require('../database/models');
const productsService = require('../services/productsService');

const controller = {
  index: async (req, res) => {
    const products = await productsService.findAll();

    res.render('index', { products: products });
  },
  carrito: (req, res) => {
    res.render('carrito');
  },
};

module.exports = controller;
