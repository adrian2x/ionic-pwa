module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.css',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // ...
}
