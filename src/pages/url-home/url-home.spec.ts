import { ViewHome } from './url-home';
import { newSpecPage } from '@stencil/core/testing';

describe('url-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ViewHome],
      html: '<url-home></url-home>',
    });
    expect(root.querySelector('ion-title').textContent).toEqual('Home');
  });
});
