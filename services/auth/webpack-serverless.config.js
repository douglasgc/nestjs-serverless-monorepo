const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function(options) {
  return {
    ...options,
    entry: ['./src/index.ts'],
    watch: false,
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?100'],
        modulesDirs: [
          'node_modules',
          path.resolve(__dirname, '../common/node_modules'),
        ],
      }),
    ],
    output: { filename: 'main.js', libraryTarget: 'commonjs' },
    plugins: [
      ...options.plugins,
      new CopyWebpackPlugin([{
        from: '../common/src/egoi/templates/',
        to: './templates/'
      }]),
    ],
  };
};
