let db = require('../database/models');
const costumersService = require('../services/customersService');
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
    const newUser = {
      type: 'user',
      ...req.body,
      password: bcrypt.hashSync(req.body.pass, 12),
    };

    costumersService.create(newUser);

    res.redirect('/');
  },

  login: async (req, res) => {
    const user = await costumersService.findOneLogin(req.body.email);
    const pass = bcrypt.compareSync(req.body.pass, user.password);

    if (!pass) return res.redirect('/users/login');

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
