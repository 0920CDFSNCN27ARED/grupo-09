const productCategoriesService = require('../../services/productCategoriesService');
const productService = require('../../services/productsService');

module.exports = {
  index: async function (req, res) {
    const products = await productService.findAll({
      order: [['name', 'DESC']],
    });

    const categories = await productCategoriesService.findAll();

    const countByCategory = {};

    for (let category of categories) {
      let categoryProducts = await productService.searchByCategory(category.id);
      let name = category.name;
      let categoryLenght = categoryProducts.length;
      countByCategory[name] = categoryLenght;
    }

    const response = {
      meta: { status: 200, count: products.length, url: req.originalUrl },
      data: {
        count: products.length,
        countByCategory: countByCategory,
        products: products,
      },
    };

    res.send(response);
  },

  getOne: async function (req, res) {
    const requiredProduct = await productService.findOne(req.params.id);

    if (requiredProduct == null) {
      return res.status(404).send('404 not found');
    }

    res.send(requiredProduct);
  },
};
