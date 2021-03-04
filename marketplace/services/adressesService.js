const { Adresses } = require('../database/models');

module.exports = {
  findOne: async (id) => {
    return await Adresses.findByPk(id, {
      include: ['customers'],
    });
  },
  findAll: async () => {
    return await Adresses.findAll({
      include: ['customers'],
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
