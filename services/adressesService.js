const { Adresses, Customers } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await Adresses.findByPk(id, {
      include: [{ model: Customers }],
    });
  },
  findAll: async () => {
    return await Adresses.findAll({
      include: [{ model: Customers }],
    });
  },
  create: async (payload) => {
    return await Adresses.create({
      ...payload,
    });
  },
  update: async (id, payload) => {
    const adress = await this.findOne(id);
    await adress.update({
      ...payload,
    });
  },
  delete: async (id) => {
    await Adresses.destroy({
      where: {
        id,
      },
    });
  },
};
