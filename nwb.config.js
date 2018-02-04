module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFastStartup',
      externals: {
        'react': 'React',
        'react-router': 'ReactRouter'
      }
    }
  }
};
