const path = require('path');
const express = require('express');
let app = express();

let indexHTML = path.resolve(__dirname, 'views/index.html');
let carritoHTML = path.resolve(__dirname, 'views/carrito.html');
let productHTML = path.resolve(__dirname, 'views/product.html');
let loginHTML = path.resolve(__dirname, 'views/login.html');
let registerHTML = path.resolve(__dirname, 'views/register.html');
let publicPath = path.resolve(__dirname, 'public/');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(indexHTML);
});

app.get('/carrito', (req, res) => {
  res.sendFile(carritoHTML);
});

app.get('/product', (req, res) => {
  res.sendFile(productHTML);
});

app.get('/login', (req, res) => {
  res.sendFile(loginHTML);
});

app.get('/register', (req, res) => {
  res.sendFile(registerHTML);
});

app.listen(80, () => {
  console.log('Servidor iniciado en http://localhost:80');
});
