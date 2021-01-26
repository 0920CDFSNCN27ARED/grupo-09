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
      type: 'user',
      ...req.body,
      pass: bcrypt.hashSync(req.body.pass, 12),
    };

    users.push(newUser);
    saveUsers(users);

    res.redirect('/');
  },
  login: (req, res) => {
    const users = getUsers();
    const user = users.find((user) => {
      return (
        user.email == req.body.email &&
        bcrypt.compareSync(req.body.pass, user.pass)
      );
    });

    if (!user) return res.redirect('/users/login');

    req.session.loggedUserId = user.id;
    return res.redirect('/');
  },
};

module.exports = controller;
