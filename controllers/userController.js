let db = require('../database/models');
const getProducts = require('../utils/getProduct');
const getUsers = require('../utils/getUsers.js');
const saveUsers = require('../utils/saveUsers.js');
const bcrypt = require('bcrypt');
const { cookie } = require('express-validator');

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

    if (req.body.remember != undefined) {
      res.cookie('remember', user.id, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }

    return res.redirect('/');
  },

  logOut: (req, res) => {
    const cookies = req.cookies;

    for (prop in cookies) {
      if (cookies.hasOwnProperty(prop)) {
        res.clearCookie('remember');
      }
    }
    req.session.destroy((err) => {
      res.redirect('/users/login');
    });
  },
};

module.exports = controller;
