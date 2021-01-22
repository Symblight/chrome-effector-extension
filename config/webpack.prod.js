/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[mjt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
});
