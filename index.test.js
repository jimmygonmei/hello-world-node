// index.test.js
const request = require('supertest');  // Import supertest
const app = require('./index');       // Import the app from index.js

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');  // Send GET request to '/'
    expect(response.status).toBe(200);            // Check that status is 200
    expect(response.text).toBe('Hello World');    // Check the response body
  });
});
