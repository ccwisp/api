'use strict';

const User = require('chatdb-picsart-hw').User;

exports.getOne = async ctx => {
  const query = User.query();

  const { userId } = ctx.params;

  const user = await query.findById(userId);
  ctx.assert(user, 404, "The requested user doesn't exist");
  ctx.status = 200;
  ctx.body = user;
};

exports.getAll = async ctx => {
  const user = await User.query();
  ctx.status = 200;
  ctx.body = user;
};

exports.getMe = ctx => {
  ctx.assert(ctx.state.user, 404, "The requested user doesn't exist");
  ctx.status = 200;
  ctx.body = ctx.state.user;
};
