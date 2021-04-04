const axios = require("axios");
const defaultConfig = require("./default");
const url = "products";

const allProductsRequest = {
  getAllProducts: function () {
    return axios({
      ...defaultConfig,
      method: "get",
      url: url,
    });
  },
};
module.exports = allProductsRequest;
