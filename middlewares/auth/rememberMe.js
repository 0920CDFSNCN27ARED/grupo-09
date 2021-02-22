const costumersService = require('../../services/customersService');

async function rememberMe(req, res, next) {
  if (
    req.cookies.remember != undefined &&
    req.session.loggedUserId == undefined
  ) {
    const user = await costumersService.findOne(req.cookies.remember);
    if (user) {
      req.session.loggedUserId = user.id;
    }
  }
  next();
}

module.exports = rememberMe;
