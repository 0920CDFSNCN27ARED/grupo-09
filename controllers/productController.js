/* requiero el modelo y lo guardo en DB*/
let db = require('../database/models');
const productsService = require('../services/productsService');
const productsCategoriesService = require('../services/productCategoriesService');
const { swal } = require('sweetalert');

const controller = {
  index: (req, res) => {
    const products = productsService.findAll();
    res.render('products/allProducts', { products: products });
  },

  getOne: (req, res) => {
    const products = productsService.findAll();
    const requiredProduct = productsService.findOne(req.params.id);

    if (requiredProduct == null) {
      return res.status(404).send('404 not found');
    }

    res.render('products/product', {
      products: products,
      requiredProduct: requiredProduct,
    });
  },

  showCreate: async (req, res) => {
    const categories = await productsCategoriesService.findAll();

    res.render('products/create', { categories: categories });
  },

  create: (req, res) => {
    const product = req.body;

    productsService.create({
      name: product.name,
      description: product.description,
      price: product.price,
      image: req.file.filename,
      category_id: product.category,
    });

    res.redirect('/products');
  },

  showEdit: (req, res) => {
    const requiredProduct = productsService.findOne(req.params.id);
    const categories = await productsCategoriesService.findAll();

    if (requiredProduct == null) {
      return res
        .status(404)
        .send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
    res.render('products/edit', {
      product: requiredProduct,
      categories: categories
    });
  },

  edit: (req, res) => {
    let requiredProduct = productsService.findOne(req.params.id);

    const filename = req.file ? req.file.filename : requiredProduct.image;

    let editedProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: filename,
      category_id: req.body.category,
    };

    productsService.update(requiredProduct.id, editedProduct);

    res.redirect('/products');
  },

  delete: (req, res) => {
    let id = req.params.id;

    productsService.delete(id);

    res.redirect('/products');
  },
};

module.exports = controller;
