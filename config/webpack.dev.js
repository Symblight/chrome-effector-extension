/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const devServerConfig = require('./webpack.server');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[mjt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  stats: {
    colors: false,
    chunks: false,
    children: false,
    performance: true,
  },
  devServer: devServerConfig,
});
