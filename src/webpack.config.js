/*eslint-disable*/

'use strict';

const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    'index': './index.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'default',
    libraryTarget: 'commonjs-module'
  }
};
