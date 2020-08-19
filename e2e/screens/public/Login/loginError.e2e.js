/* eslint-disable no-undef */

describe('Login Error', () => {
  it('should have login screen', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should type login and pass', async () => {
    await element(by.id('userInput')).typeText('adonai@gmail.co');
    await element(by.id('passInput')).typeText('123456');
  });

  it('should tap login', async () => {
    await element(by.id('loginButton')).tap();
  });

  it('should show error message', async () => {
    await waitFor(element(by.text('Usuário não encontrado')))
      .toBeVisible()
      .withTimeout(20000);

    await waitFor(element(by.text('Senha não correspondente')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
