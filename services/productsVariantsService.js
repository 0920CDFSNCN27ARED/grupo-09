const { ProductVariants } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ProductVariants.findByPk(id);
  },
  findAll: async () => {
    return await ProductVariants.findAll();
  },
  create: async (payload) => {
    return await ProductVariants.create({
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
    await ProductVariants.destroy({
      where: {
        id,
      },
    });
  },
};
