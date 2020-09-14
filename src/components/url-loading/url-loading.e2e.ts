import { newE2EPage } from '@stencil/core/testing';

describe('url-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<url-loading></url-loading>');

    const element = await page.find('url-loading');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const element = await page.find('url-loading ion-content p');
    expect(element.textContent).toContain('My name is Joseph.');
  });
});
