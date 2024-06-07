const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isDarkTheme',
  matcher: (token) => {   
    return token.filePath.indexOf('dark') > -1
  }
});

module.exports = {
  source: ['tokens/dark/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/',
      files: [       
        {
          destination: 'variables-dark.scss',
          format: 'scss/variables',
          filter: 'isDarkTheme'
        }
      ]
    }
  }
};