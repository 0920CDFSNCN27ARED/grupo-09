const {
  ShoppingCarts,
  Adresses,
  Customers,
  PaymentMethods,
} = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await ShoppingCarts.findByPk(id, {
      include: [
        { model: Adresses },
        { model: Customers },
        { model: PaymentMethods },
      ],
    });
  },
  findAll: async () => {
    return await ShoppingCarts.findAll({
      include: [
        { model: Adresses },
        { model: Customers },
        { model: PaymentMethods },
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
