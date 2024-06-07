const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isCustomTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/custom') > -1
  }
});

module.exports = {
  source: ['tokens/custom/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/',
      files: [       
        {
          destination: 'variables-custom.scss',
          format: 'scss/variables',
          filter: 'isCustomTheme'
        }
      ]
    }
  }
};