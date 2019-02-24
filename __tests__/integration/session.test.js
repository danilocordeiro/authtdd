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
      password_hash: 'hjk123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123465'
      });

    expect(response.status).toBe(200);
  });
});

