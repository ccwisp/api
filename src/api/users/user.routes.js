'use strict';

const controller = require('./user.controller');
const authMiddleware = require('../../middleware/jwt.middleware');

module.exports = Router => {
  const router = new Router({
    prefix: `/users`,
  });

  router
    .get('/me', authMiddleware, controller.getMe)
    .get('/:userId', authMiddleware, controller.getOne)
    .get('/', authMiddleware, controller.getAll);

  return router;
};
