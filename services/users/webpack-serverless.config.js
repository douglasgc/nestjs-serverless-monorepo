const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = function (options) {
  return {
    ...options,
    entry: ['./src/index.ts'],
    watch: false,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
        modulesDirs: [
          'node_modules',
          path.resolve(__dirname, '../common/node_modules'),
        ],
      }),
    ],
    output: { filename: 'main.js', libraryTarget: 'commonjs' },
    plugins: [
      ...options.plugins,
    ],
  };
};
