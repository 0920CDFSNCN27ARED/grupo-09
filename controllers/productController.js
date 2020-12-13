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
};

module.exports = controller;
