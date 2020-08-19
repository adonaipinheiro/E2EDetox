/* eslint-disable no-undef */

describe('Login to Register', () => {
  it('should have login screen', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should tap register button', async () => {
    await element(by.id('registerButton')).tap();
  });

  it('should have register screen', async () => {
    await waitFor(element(by.id('register')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
