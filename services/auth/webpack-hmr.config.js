const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    watch: true,
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin({ name: 'admin' }),
      new StartServerPlugin({ name: 'main.js' }),
      new CopyWebpackPlugin([{
        from: '../common/src/egoi/templates/',
        to: './templates/'
      }]),
    ],
  };
};
