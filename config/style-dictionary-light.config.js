const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isLightTheme',
  matcher: (token) => {
    return token.filePath.indexOf('/light') > -1
  }
});

module.exports = {
  source: ['tokens/light/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/',
      files: [       
        {
          destination: 'variables-light.scss',
          format: 'scss/variables',
          filter: 'isLightTheme'
        }
      ]
    }
  }
};