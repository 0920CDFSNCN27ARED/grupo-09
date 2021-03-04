const { ShoppingCarts } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ShoppingCarts.findByPk(id, {
      include: [
        'billing_address',
        'shipping_adresses',
        'customers',
        'payment_method',
      ],
    });
  },
  findAll: async () => {
    return await ShoppingCarts.findAll({
      include: [
        'billing_address',
        'shipping_adresses',
        'customers',
        'payment_method',
      ],
    });
  },
  create: async (payload) => {
    return await ShoppingCarts.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const cart = await this.findOne(id);
    await cart.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await ShoppingCarts.destroy({
      where: {
        id,
      },
    });
  },
};
