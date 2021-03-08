const path = require('path');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const authenticate = require('./middlewares/auth/authenticate');
const rememberMe = require('./middlewares/auth/rememberMe');

const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(
  session({
    secret: 'Nuestro mensaje secretoooo',
    resave: true,
    saveUninitialized: true,
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let publicPath = path.resolve(__dirname, 'public/');

app.locals.user = null;

const productRoutes = require('./routes/productRoutes');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

const productAPIRoutes = require('./routes/api/productRoutes');

app.use(express.static(publicPath));

app.use(rememberMe);
app.use(authenticate);

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/api/products', productAPIRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
