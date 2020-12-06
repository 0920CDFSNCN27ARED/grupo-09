const path = require('path');
const express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

let registerHTML = path.resolve(__dirname, 'views/register.html');

let publicPath = path.resolve(__dirname, 'public/');

const productRoutes = require('./routes/productRoutes');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static(publicPath));

app.use('/', mainRoutes);

app.use('/carrito', mainRoutes);

app.use('/products', productRoutes);

app.use('/login', mainRoutes);

app.use('/register', mainRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
