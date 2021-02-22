const { Customers } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await Customers.findByPk(id);
  },
  findOneLogin: async (emaill) => {
    return await Customers.findOne({
      where: {
        email: emaill,
      },
    });
  },
  findAll: async () => {
    return await Customers.findAll();
  },
  create: async (payload) => {
    return await Customers.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const customer = await this.findOne(id);
    await customer.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await Customers.destroy({
      where: {
        id,
      },
    });
  },
};
