/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const { IgnorePlugin, DefinePlugin, ids } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getClientEnvironment = require('./env');

const paths = require('./paths');

const DIST = resolve(__dirname, '..', 'dist');

const ENTRY_HTML_FOREGROUND_FILE = resolve(
  __dirname,
  '..',
  'public/foreground.html'
);

const ENTRY_HTML_OPTIONS_FILE = resolve(__dirname, '..', 'public/options.html');
const ENTRY_HTML_POPUP_FILE = resolve(__dirname, '..', 'public/popup.html');

const ENTRY_PATH_POPUP = resolve(__dirname, '..', 'src/index-popup.tsx');
const ENTRY_PATH_OPTIONS = resolve(__dirname, '..', 'src/index-options.tsx');
const ENTRY_PATH_FOREGROUND = resolve(
  __dirname,
  '..',
  'src/index-foreground.tsx'
);

const env = getClientEnvironment('');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isTesting = process.env.NODE_ENV === 'test';

function setDevTool() {
  // function to set dev-tool depending on environment
  if (isTesting) {
    return 'eval';
  } else if (isProduction) {
    return 'source-map';
  } else {
    return 'eval-source-map';
  }
}

module.exports = {
  target: 'web',
  entry: {
    popup: ENTRY_PATH_POPUP,
    options: ENTRY_PATH_OPTIONS,
    foreground: ENTRY_PATH_FOREGROUND,
  },
  devtool: setDevTool(),
  output: {
    path: DIST,
    filename: '[name].bundle.js',
    chunkFilename: 'chunk-[name].[contenthash].js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    alias: {
      '@features': paths.features,
      '@libs': paths.libs,
      '@ui': paths.ui,
      '@api': paths.api,
      '@views': paths.views,
      '@assets': paths.assets,
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new ids.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 4,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: ENTRY_HTML_POPUP_FILE,
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      filename: 'options.html',
      template: ENTRY_HTML_OPTIONS_FILE,
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      filename: 'foreground.html',
      template: ENTRY_HTML_FOREGROUND_FILE,
      chunks: ['foreground'],
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   title: 'React fxg stock charts',
    //   inject: 'body',
    //   chunks: ['vendor', 'index'],
    //   chunksSortMode: 'manual',
    //   template: ENTRY_HTML_FILE,
    //   favicon: resolve(__dirname, '..', 'public/favicon.ico'),
    // }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '[name].[ext]' },
        { from: 'public/background.js', to: '[name].[ext]' },
        { from: 'public/inject_script.js', to: '[name].[ext]' },
        { from: 'public/assets/images/*.png', to: '[name].[ext]' },
        { from: 'public/assets/fonts/*.ttf', to: 'fonts/[name].[ext]' },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
