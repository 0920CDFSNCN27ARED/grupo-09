const getProducts = require('../utils/getProduct');
const getUsers = require('../utils/getUsers.js');
const saveUsers = require('../utils/saveUsers.js');
const bcrypt = require('bcrypt');

const controller = {
  showLogin: (req, res) => {
    res.render('users/login');
  },
  showRegister: (req, res) => {
    res.render('users/register');
  },

  register: (req, res) => {
    const users = getUsers();

    const lastUserIndex = users.length - 1;
    const lastUser = users[lastUserIndex];
    const newId = lastUser ? lastUser.id + 1 : 1;

    console.log(req.body);

    const newUser = {
      id: newId,
      ...req.body,
      pass: bcrypt.hashSync(req.body.pass, 12),
    };

    users.push(newUser);
    saveUsers(users);

    res.redirect('/');
  },
};

module.exports = controller;
