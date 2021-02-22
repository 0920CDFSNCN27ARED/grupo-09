const costumersService = require('../../services/customersService');

async function authenticate(req, res, next) {
  const id = req.session.loggedUserId;

  if (!id) return next();

  const loggedUser = await costumersService.findOne(id);

  if (!loggedUser) {
    delete req.session.loggedUserId;
    return next();
  }

  res.locals.user = loggedUser;
  next();
}

module.exports = authenticate;
