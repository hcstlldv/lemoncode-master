'use strict';
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const DotEnv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
  },
  plugins: [new DotEnv({ path: './dev.env' })],
});
