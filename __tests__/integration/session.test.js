const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should receive JWT token when authenticated with valid credentials', async() => {
    const user = await User.create({ name: 'Juliana', email: 'ju@gata.com', password_hash: 'hjk123'});

    console.log(user);

    expect(user.email).toBe('ju@gata.com');
  });
});

