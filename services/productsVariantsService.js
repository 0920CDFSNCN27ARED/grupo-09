const { ProductsVariants } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ProductsVariants.findByPk(id);
  },
  findAll: async () => {
    return await ProductsVariants.findAll();
  },
  create: async (payload) => {
    return await ProductsVariants.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const variant = await this.findOne(id);
    await variant.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await ProductsVariants.destroy({
      where: {
        id,
      },
    });
  },
};
