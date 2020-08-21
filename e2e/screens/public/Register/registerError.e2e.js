/* eslint-disable no-undef */

describe('Register Error', () => {
  it('should have login screen and go to Register Page', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);
    await element(by.id('registerButton')).tap();
  });

  it('should have register screen', async () => {
    await waitFor(element(by.id('register')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should type all fields for Registration', async () => {
    await element(by.id('registerNameField')).typeText('Adonai');
    await element(by.id('registerEmailField')).typeText('adonai@gmail.com');
    await element(by.id('registerPassField')).typeText('123456');
    await element(by.id('registerRePassField')).typeText('12345');
  });

  it('should show error message', async () => {
    await waitFor(element(by.text('As senhas não conferem')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
