const getProducts = require('../utils/getProduct');

const controller = {
  index: (req, res) => {
    const products = getProducts();
    res.render('products/allProducts', { products: products });
  },

  getOne: (req, res) => {
    const products = getProducts();
    const requiredProduct = products.find((prod) => {
      return prod.id == req.params.id;
    });

    if (requiredProduct == null) {
      return res.status(404).send('404 not found');
    }

    res.render('products/product', {
      products: products,
      requiredProduct: requiredProduct,
    });
  },

  showCreate: (req, res) => {
    res.render('products/create');
  },

  create: (req, res) => {
    const message = 'Product Created: ' + JSON.stringify(req.body);
    res.send(message);
  },

  showEdit: (req, res) => {
    const products = getProducts();
    const requiredProduct = products.find((prod) => {
      return prod.id == req.params.id;
    });
    if (requiredProduct == null) {
      return res
        .status(404)
        .send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
    res.render('products/edit', {
      product: requiredProduct,
    });
  },

  edit: (req, res) => {
    const message = 'Product Edited: ' + JSON.stringify(req.body);
    res.send(message);
  },
};

module.exports = controller;
