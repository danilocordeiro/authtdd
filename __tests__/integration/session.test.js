const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async() => {
    await truncate();
  })

  it('should authenticated with valid credentials', async() => {
    const user = await User.create({ 
      name: 'Juliana', 
      email: 'ju@gata.com', 
      password: 'hjk123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'hjk123'
      });

    expect(response.status).toBe(200);
  });

  it('should not authenticated with invalid credentials', async() => {
    const user = await User.create({ 
      name: 'Juliana', 
      email: 'ju@gata.com', 
      password: '123433'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123465'
      });

    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async() => {
    const user = await User.create({ 
      name: 'Juliana', 
      email: 'ju@gata.com', 
      password: 'hjk123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'hjk123'
      });

    expect(response.body).toHaveProperty('token');
  });
});

