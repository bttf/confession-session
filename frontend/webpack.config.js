const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devServer: {
    host: '0.0.0.0',
    port: PORT,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }],
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/assets/index.html'),
    }),
    new CopyWebpackPlugin([
      { context: path.resolve(__dirname, 'src'), from: '*.html' },
      { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
    ]),
  ],
};
