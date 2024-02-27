const homeScreen = require('../screens/home.screen');

describe('Acess Admin Panel', () => {
  it('should login with valid credentials', async () => {
    await homeScreen.goToLogin();
  });
});
