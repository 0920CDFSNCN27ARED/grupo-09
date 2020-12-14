const getProducts = require('../utils/getProduct');

const controller = {
  index: (req, res) => {
    const products = getProducts();
    res.render('index', { products: products });
  },
  carrito: (req, res) => {
    res.render('carrito');
  },
  login: (req, res) => {
    res.render('login');
  },
  register: (req, res) => {
    res.render('register');
  },
};

module.exports = controller;
