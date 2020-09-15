import { newE2EPage } from '@stencil/core/testing';

describe('app-router', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('app-router');
    expect(element).toHaveClass('hydrated');
  });

  it('renders an ion-app', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('app-router > ion-app');
    expect(element).toHaveClass('hydrated');
  });
});
