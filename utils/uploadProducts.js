const fs = require('fs');
const path = require('path');

function uploadProducts(file) {
  fs.writeFileSync(
    path.resolve(__dirname, '..', 'json', 'products.json'),
    JSON.stringify(file, null, 2),
    { encoding: 'utf-8' }
  );
}

module.exports = uploadProducts;
