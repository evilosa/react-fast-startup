module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFastStartup',
      externals: {
        'react': 'React',
        'radium': 'Radium',
        'react-router': 'ReactRouter',
        'react-router-dom': 'ReactRouterDom'
      }
    }
  }
};
