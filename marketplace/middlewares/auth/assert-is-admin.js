function assertIsAdmin(req, res, next) {
  if (res.locals.user.type != 'admin') {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = assertIsAdmin;
