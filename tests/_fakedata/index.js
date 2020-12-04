const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('chatdb-picsart-hw').knexfile;

const knex = Knex(knexConfig.development);
Model.knex(knex);

const fd = require('./users/user');
const User = require('chatdb-picsart-hw').User;

const loadUser = async user => {
  await User.query().insert(user);
};
const unloadUser = async user => {
  await User.query()
    .delete()
    .where('login', user.login);
};

module.exports = {
  loadUser,
  unloadUser,
};
