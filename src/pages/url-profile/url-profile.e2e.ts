import { newE2EPage } from '@stencil/core/testing';

describe('url-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<url-profile></url-profile>');

    const element = await page.find('url-profile');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const element = await page.find('url-profile ion-content p');
    expect(element.textContent).toContain('My name is Joseph.');
  });
});
