/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

const publicPath = resolve(__dirname, '..', 'public');

module.exports = {
  contentBase: publicPath,
  publicPath: '/',
  watchContentBase: true,
  hot: true,
  compress: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: {
    all: true,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    moduleTrace: true,
    errorDetails: true,
  },
  port: 8081,
  watchOptions: { aggregateTimeout: 300, poll: 1000 },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
