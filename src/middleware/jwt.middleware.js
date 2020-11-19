const koaJwt = require('koa-jwt');
const { SECRET } = require('../config');

module.exports = koaJwt({
  secret: SECRET,
});
