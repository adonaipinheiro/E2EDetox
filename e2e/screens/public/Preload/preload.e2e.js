/* eslint-disable no-undef */

describe('Preload', () => {
  it('should have preload screen', async () => {
    await waitFor(element(by.id('preload')))
      .toBeVisible()
      .withTimeout(20000);
  });
});
