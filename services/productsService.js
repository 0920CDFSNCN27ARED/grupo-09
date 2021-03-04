const {
  Products,
  ProductCategories,
  ProductVariants,
  Sequelize,
} = require('../database/models');

const Op = Sequelize.Op;

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

  search: async (search, category, orderBy) => {
    if (category == 'any') {
      return await Products.findAll({
        include: [
          { model: ProductVariants, as: 'variant' },
          { model: ProductCategories, as: 'category' },
        ],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
        order: [[orderBy, 'ASC']],
      });
    } else {
      return await Products.findAll({
        include: [
          { model: ProductVariants, as: 'variant' },
          { model: ProductCategories, as: 'category' },
        ],
        where: {
          name: { [Op.like]: `%${search}%` },
          '$category.id$': category,
        },
        order: [[orderBy, 'ASC']],
      });
    }
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
