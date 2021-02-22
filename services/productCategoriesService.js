const { ProductCategories } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ProductCategories.findByPk(id);
  },
  findAll: async () => {
    return await ProductCategories.findAll();
  },
  create: async (payload) => {
    return await ProductCategories.create({
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
    await ProductCategories.destroy({
      where: {
        id,
      },
    });
  },
};
