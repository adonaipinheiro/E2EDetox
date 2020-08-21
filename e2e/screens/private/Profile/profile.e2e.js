/* eslint-disable no-undef */

describe('Profile', () => {
  it('should login', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);

    await element(by.id('userInput')).replaceText('adonai@gmail.com');
    await element(by.id('passInput')).replaceText('123456');

    await element(by.id('loginButton')).tap();
  });

  it('should tap to profile', async () => {
    await waitFor(element(by.id('timeline')))
      .toBeVisible()
      .withTimeout(20000);

    await element(by.id('imageProfile')).tap();
  });

  it('should have Profile', async () => {
    await waitFor(element(by.id('profile')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
