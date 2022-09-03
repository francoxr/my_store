const express = require('express');
const productsRouter = require('./products.router');
const personsRouter = require('./persons.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');


const routerApi = (app) => {

  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/persons', personsRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
