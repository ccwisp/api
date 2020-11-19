'use strict';

const controller = require('./auth.controller');
const validationMiddleware = require('../../middleware/validation.middlware');

module.exports = Router => {
  const router = new Router({
    prefix: `/auth`,
  });

  router
    .post('/login', controller.login)
    .post('/register', validationMiddleware, controller.register);

  return router;
};
