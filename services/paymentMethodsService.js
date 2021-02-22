const { PaymentMethods } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await PaymentMethods.findByPk(id);
  },
  findAll: async () => {
    return await PaymentMethods.findAll();
  },
  create: async (payload) => {
    return await PaymentMethods.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const method = await this.findOne(id);
    await method.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await PaymentMethods.destroy({
      where: {
        id,
      },
    });
  },
};
