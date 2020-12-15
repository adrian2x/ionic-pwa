import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

// https://stenciljs.com/docs/config

export const config: Config = {
  buildEs5: false,
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'immediate',
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
  plugins: [
    postcss({
      plugins: [
        tailwindcss(),
        autoprefixer(),
        postcssPresetEnv({ stage: 1 }),
      ]
    })
  ]
};
