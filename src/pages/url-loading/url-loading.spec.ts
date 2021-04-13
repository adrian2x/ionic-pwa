import { ViewLoading } from './url-loading';
import { newSpecPage } from '@stencil/core/testing';

describe('url-loading', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewLoading],
        html: '<url-loading></url-loading>',
      });
      expect(rootInstance.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewLoading],
        html: '<url-loading name="quincy"></url-loading>',
      });
      expect(rootInstance.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewLoading],
        html: '<url-loading name="JOSEPH"></url-loading>',
      });
      expect(rootInstance.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [ViewLoading],
        html: '<url-loading name="Q"></url-loading>',
      });
      expect(rootInstance.formattedName()).toEqual('Q');
    });
  });
});
