/* eslint-disable no-undef */

describe('Login Success', () => {
  it('should have login screen', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should type login and pass', async () => {
    await element(by.id('userInput')).typeText('adonai@gmail.com');
    await element(by.id('passInput')).typeText('123456');
  });

  it('should tap login', async () => {
    await element(by.id('loginButton')).tap();
  });

  it('should have timeline screen', async () => {
    await waitFor(element(by.id('timeline')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
