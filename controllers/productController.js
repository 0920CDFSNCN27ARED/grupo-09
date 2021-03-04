/* requiero el modelo y lo guardo en DB*/
let db = require('../database/models');
const productsService = require('../services/productsService');
const productsCategoriesService = require('../services/productCategoriesService');
const productsVariantsService = require('../services/productsVariantsService');
const { swal } = require('sweetalert');

const controller = {
  index: async (req, res) => {
    const categories = await productsCategoriesService.findAll();
    let products;
    const { search, category, orderBy } = req.query;

    console.log(req.query);

    if (!req.query.search && !req.query.category && !req.query.orderBy) {
      products = await productsService.findAll();
    } else {
      products = await productsService.search(search, category, orderBy);
    }

    res.render('products/allProducts', {
      products: products,
      categories: categories,
      search: search,
      selectedCategory: category,
      orderBy: orderBy,
    });
  },

  getOne: async (req, res) => {
    const products = await productsService.findAll();
    const requiredProduct = await productsService.findOne(req.params.id);

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
    const variants = await productsVariantsService.findAll();

    res.render('products/create', {
      categories: categories,
      variants: variants,
    });
  },

  create: (req, res) => {
    const product = req.body;

    productsService.create({
      name: product.name,
      description: product.description,
      size: product.size,
      weight: product.weight,
      qty_sales: product.qty_sales,
      qty_stock: product.qty_stock,
      sku: product.sku,
      price: product.price,
      image: req.file.filename,
      category_id: product.category,
      variant_id: product.variant,
    });

    res.redirect('/products');
  },

  showEdit: async (req, res) => {
    const requiredProduct = await productsService.findOne(req.params.id);
    const categories = await productsCategoriesService.findAll();
    const variants = await productsVariantsService.findAll();

    if (requiredProduct == null) {
      return res
        .status(404)
        .send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
    res.render('products/edit', {
      product: requiredProduct,
      categories: categories,
      variants: variants,
    });
  },

  edit: async (req, res) => {
    let requiredProduct = await productsService.findOne(req.params.id);

    const filename = req.file ? req.file.filename : requiredProduct.image;
    const product = req.body;

    let editedProduct = {
      name: product.name,
      description: product.description,
      size: product.size,
      weight: product.weight,
      qty_sales: product.qty_sales,
      qty_stock: product.qty_stock,
      sku: product.sku,
      price: product.price,
      image: filename,
      category_id: product.category,
      variant_id: product.variant,
    };

    await productsService.update(requiredProduct.id, editedProduct);

    res.redirect('/products');
  },

  delete: (req, res) => {
    let id = req.params.id;

    productsService.delete(id);

    res.redirect('/products');
  },
};

module.exports = controller;
