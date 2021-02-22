const { ProductsCategories } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ProductsCategories.findByPk(id);
  },
  findAll: async () => {
    return await ProductsCategories.findAll();
  },
  create: async (payload) => {
    return await ProductsCategories.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const category = await this.findOne(id);
    await category.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await ProductsCategories.destroy({
      where: {
        id,
      },
    });
  },
};
