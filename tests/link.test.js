const supertest = require('supertest');
const { app } = require('../server.ts');
const db = require('./config/database.ts');
const api = supertest(app);

beforeAll(async () => await db.default.connect());
// afterAll(async () => await db.default.close());
// afterEach(async () => db.default.clear());

describe('links', () => {
  describe('POST /links', () => {
    test('Debería devolver JSON con status 201', async () => {
      const response = await api
        .post('/links')
        .send({
          url: 'http://localhost',
          shortenedUrl: 'abcd',
          createdAt: 'Me cago en la hostia Merche',
        })
        .expect(201)
        .expect('Content-Type', /application\/json/);

      expect(response.body).toEqual({
        url: 'http://localhost',
        shortenedUrl: 'abcd',
        createdAt: 'Me cago en la hostia Merche',
      });
    });
  });
});
