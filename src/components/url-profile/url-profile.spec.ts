import { ViewProfile } from './url-profile';
import { newSpecPage } from '@stencil/core/testing';

describe('url-profile', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewProfile],
        html: '<url-profile></url-profile>',
      });
      expect(rootInstance.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewProfile],
        html: '<url-profile name="quincy"></url-profile>',
      });
      expect(rootInstance.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewProfile],
        html: '<url-profile name="JOSEPH"></url-profile>',
      });
      expect(rootInstance.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewProfile],
        html: '<url-profile name="Q"></url-profile>',
      });
      expect(rootInstance.formattedName()).toEqual('Q');
    });
  });
});
