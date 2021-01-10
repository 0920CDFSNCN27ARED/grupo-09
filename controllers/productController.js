const getProducts = require('../utils/getProduct');
const uploadProducts = require('../utils/uploadProducts');
const { swal } = require('sweetalert');

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
    let products = getProducts();
    let product = req.body;
    let id = products[products.length - 1].id + 1;

    products.push({
      id: id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
      category: req.body.category,
    });

    uploadProducts(products);

    res.redirect('/products');
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
    const products = getProducts();
    let requiredProduct = products.find((prod) => {
      return prod.id == req.params.id;
    });

    const filename = req.file ? req.file.filename : requiredProduct.image;

    let index = products.indexOf(requiredProduct);

    let editedProduct = {
      id: requiredProduct.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: filename,
      category: req.body.category,
    };

    products.splice(index, 1, editedProduct);

    uploadProducts(products);
    res.redirect('/products');
  },

  delete: (req, res) => {
    let products = getProducts();
    let id = req.params.id;
    let product = products.find((prod) => {
      return prod.id == id;
    });
    let index = products.indexOf(product);

    products.splice(index, 1);

    uploadProducts(products);

    res.redirect('/products');
  },
};

module.exports = controller;
