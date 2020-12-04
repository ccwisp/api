const admin = {
  login: 'PicsartAdmin',
  email: 'testEmail@picsart.com',
  password: '12345678',
};
const normalUser = {
  login: 'PicsartUser',
  email: 'testEmail@picsart.com',
  password: '12345678',
};

module.exports = {
  list: [admin, normalUser],
  admin: admin,
  normal: normalUser,
};
