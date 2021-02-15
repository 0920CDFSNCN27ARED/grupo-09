const getUsers = require('../../utils/getUsers');

function rememberMe(req, res, next) {
  if (
    req.cookies.remember != undefined &&
    req.session.loggedUserId == undefined
  ) {
    const users = getUsers();
    const user = users.find((user) => {
      return user.id == req.cookies.remember;
    });
    if (user) {
      req.session.loggedUserId = user.id;
    }
  }
  next();
}

module.exports = rememberMe;
