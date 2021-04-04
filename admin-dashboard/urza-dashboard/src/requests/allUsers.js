const axios = require("axios");
const defaultConfig = require("./default");
const url = "users";

const allUsersRequest = {
  getAllUsers: function () {
    return axios({
      ...defaultConfig,
      method: "get",
      url: url,
    });
  },
};
module.exports = allUsersRequest;
