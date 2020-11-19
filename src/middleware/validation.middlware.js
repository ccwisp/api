// Middleware for standard validation procedure
const createError = require('http-errors');
module.exports = async (ctx, next) => {
  const { email, password, login } = ctx.request.body;
  if (!(email && password && login)) {
    throw createError(400, 'Fields are not given');
  }

  if (login && !(login.length >= 4)) {
    throw createError(400, 'invalid login');
  }
  if (password && !(password.length >= 5)) {
    throw createError(400, 'invalid password');
  }

  await next();
};
