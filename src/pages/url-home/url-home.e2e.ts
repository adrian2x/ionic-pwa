import { newE2EPage } from '@stencil/core/testing';

describe('url-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<url-home></url-home>');

    const element = await page.find('url-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<url-home></url-home>');

    const element = await page.find('url-home ion-content ion-button');
    expect(element.textContent).toEqual('Profile page');
  });
});
