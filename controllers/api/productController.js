const productService = require('../../services/productsService');

module.exports = {
  index: async function (req, res) {
    const products = await productService.findAll({
      order: [['name', 'DESC']],
    });

    const response = {
      meta: { status: 200, count: products.length, url: req.originalUrl },
      data: products,
    };

    res.send(response);
  },

  latest: (req, res) => {},
};
