const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFastStartup',
      externals: {
        'color': 'Color',
        'react': 'React',
        'radium': 'Radium',
        'react-router': 'ReactRouter',
        'react-router-dom': 'ReactRouterDom'
      }
    }
  },
  webpack: {
    aliases: {
      'components': path.resolve('src'),
      'demo-components': path.resolve('demo/src')
    }
  }
};
