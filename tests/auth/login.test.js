const fakeUsers = require('../_fakedata/users/user');
const app = require('../../src/server');
const supertest = require('supertest');
const fd = require('../_fakedata/');
const fs = require('fs-extra');
const path = require('path');

let token;
let request;

beforeAll(async done => {
  request = await supertest.agent(app.listen(), done);
  await fd.loadUser(fakeUsers.normal);

  done();
});
describe('Logging in with normal user', () => {
  it('should log in successfully', () => {
    return request
      .post('/api/1/auth/login')
      .send({
        login: fakeUsers.normal.login,
        password: fakeUsers.normal.password,
      })
      .then(response => {
        token = response.body.accessToken; // save the token!
        const usersList = fs.readJSONSync(
          path.join(__dirname, '../_fakedata/user_tokens.json'),
        );
        usersList[fakeUsers.normal.login] = token;
        fs.writeJSONSync(
          path.join(__dirname, '../_fakedata/user_tokens.json'),
          usersList,
        );
        expect(response.statusCode).toBe(201);
      });
  });

  afterAll(async done => {
    await fd.unloadUser(fakeUsers.normal);
    done();
  });
});
