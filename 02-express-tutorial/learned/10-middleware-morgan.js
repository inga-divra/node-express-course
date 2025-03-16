const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

const morgan = require('morgan');

//req => middleware => res
// here order matters!

// app.use('/api', logger);
//app.use(logger); //for all routes

// app.use([logger, authorize]);

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/api/products', (req, res) => {
  res.send('<h1>Products</h1>');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);

  res.send('<h1>Items</h1>');
});

app.listen(5000, () => {
  console.log('Sever is listening on port 5000...');
});
