module.exports = (mixConfig, overrideConfig) =>
  require('./karma.conf.common')(
    Object.assign({}, mixConfig, {
      plugins: [
        ...mixConfig.plugins,
        require('karma-jsdom-launcher')
      ],
      reporters: [...mixConfig.reporters]
    }),
    Object.assign({}, { browsers: ['jsdom'] }, overrideConfig)
  );
