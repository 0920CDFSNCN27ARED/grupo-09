let db = require('../database/models');
const costumersService = require('../services/customersService');
const bcrypt = require('bcrypt');
const { cookie } = require('express-validator');
const { check, validationResult, body } = require('express-validator');

const controller = {
  showLogin: (req, res) => {
    res.render('users/login');
  },
  showRegister: (req, res) => {
    res.render('users/register');
  },

  register: async (req, res) => {
    let errors = validationResult(req);
    try {
      if (errors.isEmpty()) {
        const newUser = {
          type: 'user',
          ...req.body,
          password: bcrypt.hashSync(req.body.pass, 12),
        };

        await costumersService.create(newUser);

        //Keeps you logged in after register
        const user = await costumersService.findOneLogin(newUser.email);
        req.session.loggedUserId = user.id;

        res.redirect('/');
      } else {
        return res.render('users/register', {
          errors: errors.errors,
        });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  login: async (req, res) => {
    const user = await costumersService.findOneLogin(req.body.email);

    if (user == null) return res.redirect('/users/login');

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
