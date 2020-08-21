/* eslint-disable no-undef */

describe('Timeline', () => {
  it('should login', async () => {
    await waitFor(element(by.id('login')))
      .toBeVisible()
      .withTimeout(20000);

    await element(by.id('userInput')).replaceText('adonai@gmail.com');
    await element(by.id('passInput')).replaceText('123456');

    await element(by.id('loginButton')).tap();
  });

  it('should show timeline', async () => {
    await waitFor(element(by.id('timeline')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should have tags', async () => {
    await waitFor(element(by.id('tagScroll')))
      .toBeVisible()
      .withTimeout(20000);

    await element(by.id('tagScroll')).scroll(100, 'right');
  });

  it('should have timeline', async () => {
    await waitFor(element(by.id('timelineScroll')))
      .toBeVisible()
      .withTimeout(20000);
  });

  it('should tap on new', async () => {
    await element(by.id('new1')).tap();
  });

  it('should show the new', async () => {
    await waitFor(element(by.id('newPage')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
