const { Orders } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await Orders.findByPk(id, {
      include: ['products', 'shopping_cart'],
    });
  },
  findAll: async () => {
    return await Orders.findAll({
      include: ['products', 'shopping_cart'],
    });
  },
  create: async (payload) => {
    return await Orders.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const order = await this.findOne(id);
    await order.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await Orders.destroy({
      where: {
        id,
      },
    });
  },
};
