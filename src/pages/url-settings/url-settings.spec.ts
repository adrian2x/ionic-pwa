import { ViewSettings } from './url-settings';
import { newSpecPage } from '@stencil/core/testing';

describe('url-settings', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewSettings],
        html: '<url-settings></url-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewSettings],
        html: '<url-settings name="quincy"></url-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewSettings],
        html: '<url-settings name="JOSEPH"></url-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewSettings],
        html: '<url-settings name="Q"></url-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Q');
    });
  });
});
