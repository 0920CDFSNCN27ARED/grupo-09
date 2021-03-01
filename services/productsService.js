const { Products } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await Products.findByPk(id, {
      include: ['variant', 'category'],
    });
  },
  findAll: async (config) => {
    return await Products.findAll(
      {
        include: ['variant', 'category'],
      },
      config
    );
  },
  create: async (payload) => {
    return await Products.create({
      ...payload,
    });
  },
  update: async function (id, payload) {
    const product = await this.findOne(id);
    await product.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await Products.destroy({
      where: {
        id,
      },
    });
  },
};
