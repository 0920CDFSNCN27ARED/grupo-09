const path = require('path');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const authenticate = require('./middlewares/auth/authenticate');

const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

let registerHTML = path.resolve(__dirname, 'views/register.html');

let publicPath = path.resolve(__dirname, 'public/');

app.locals.user = null;

const productRoutes = require('./routes/productRoutes');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.static(publicPath));

app.use(
  session({
    secret: 'Nuestro mensaje secreto',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(authenticate);

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
