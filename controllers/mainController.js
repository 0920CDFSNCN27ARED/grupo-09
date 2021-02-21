let db = require('../database/models');
const getProducts = require('../utils/getProduct');

const controller = {
  index: (req, res) => {
    const products = getProducts();
    res.render('index', { products: products });
  },
  carrito: (req, res) => {
    res.render('carrito');
  },
};

module.exports = controller;
