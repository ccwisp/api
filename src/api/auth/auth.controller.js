'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SECRET } = require('../../config');

const User = require('chatdb-picsart-hw').User;

exports.register = async ctx => {
  const { login, password, email } = ctx.request.body;
  ctx.assert(login || password || email, 400, 'The user info is malformed!');
  // Store user in the db with the hashed pass

  const user = {
    login,
    password,
    email,
  };

  const insertedGraph = await User.transaction(async trx => {
    const insertedGraph = await User.query(trx).insert(user);

    return insertedGraph;
  });
  ctx.status = 201;
  ctx.body = { ...insertedGraph, message: 'Successfully registered !' };
};

exports.login = async ctx => {
  const query = User.query();

  const { login, password } = ctx.request.body;
  const user = await query.findOne({ login: login });
  ctx.assert(user, 400, 'Invalid credentials ');

  const { password: realPassword } = user || {};
  ctx.assert(password || realPassword, 400, 'Invalid credentials');
  // Bcrypt compares password
  const validReg = await bcrypt.compare(password, realPassword);
  ctx.assert(validReg, 400, 'Invalid credentials');
  //  use the payload to store information about the user such as username, user email, etc.

  const payload = JSON.stringify(user);

  //  create the access token with the shorter lifespan
  const accessToken = jwt.sign(payload, SECRET);

  ctx.status = 201;
  ctx.state.user = user;
  ctx.body = { ...user, accessToken, message: 'Successfully logged in' };
};
