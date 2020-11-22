const supertest = require('supertest');
const app = require('../src/server');

let token;
const request = supertest.agent(app.listen());
beforeAll(done => {
  request
    .post('/api/1/auth/login')
    .send({
      login: 'david_vardanian',
      password: 'caladan',
    })
    .end((err, response) => {
      token = response.body.accessToken; // save the token!

      done();
    });
});

describe('GET Endpoints', () => {
  it('It should require authorization', () => {
    return request.get('/api/1/users/').then(response => {
      expect(response.statusCode).toBe(401);
    });
  });
  // send the token - should respond with a 200
  it('It responds with JSON', () => {
    return request
      .get('/api/1/users/')
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
  });
});
