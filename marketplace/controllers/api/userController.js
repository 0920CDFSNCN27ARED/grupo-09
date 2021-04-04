const { parse } = require('path');
const usersService = require('../../services/customersService');

module.exports = {
  index: async function (req, res) {
    const users = await usersService.findAll();

    const usersParsed = users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
      };
    });

    const response = {
      count: users.length,
      users: usersParsed,
    };

    res.send(response);
  },

  getOne: async function (req, res) {
    const user = await usersService.findOne(req.params.id);

    if (user == null) {
      return res.status(404).send('404 not found');
    }

    const parsedUser = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
    };

    res.send(parsedUser);
  },
};
