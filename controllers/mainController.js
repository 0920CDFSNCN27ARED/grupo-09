const controller = {
  index: (req, res) => {
    res.render('index');
  },
  carrito: (req, res) => {
    res.render('carrito');
  },
  login: (req, res) => {
    res.render('login');
  },
  register: (req, res) => {
    res.render('register');
  },
};

module.exports = controller;
