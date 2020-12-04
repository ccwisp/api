const supertest = require('supertest');
const app = require('../src/server');
const fs = require('fs-extra');
const path = require('path');

let request;

beforeAll(async done => {
  request = await supertest.agent(app.listen(), done);
  done();
});

describe('GET Endpoints', () => {
  it('It should require authorization', () => {
    return request.get('/api/1/users/').then(response => {
      expect(response.statusCode).toBe(401);
    });
  });
  // send the token - should respond with a 200
  it('It responds with JSON', () => {
    const token = fs.readJSONSync(
      path.join(__dirname, './_fakedata/user_tokens.json'),
    ).PicsartUser;
    return request
      .get('/api/1/users/')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
  });
});
