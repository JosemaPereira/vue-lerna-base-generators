const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const compresionPlugin = new CompressionPlugin({
  algorithm: 'gzip',
  test: /\.(js|css)$/,
  deleteOriginalAssets: true,
  filename: '[path][base]',
});

const bundleAnalyzerPlugin = new BundleAnalyzer();

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    if (process.env.NODE_ENV == 'production') {
      config.plugin('CompressionPlugin').use(compresionPlugin);
    } else {
      config.plugin('BundleAnalyzer').use(bundleAnalyzerPlugin);
    }
  },
  productionSourceMap: false,
};
