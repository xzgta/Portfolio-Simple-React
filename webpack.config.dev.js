const webpack = require('webpack');
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './development/src/index.js',
  mode: 'development',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // .js loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        // .css loader
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        // font-loader
        test: /\.ttf$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './development/public/index.html',
      filename: './index.html',
      inject: 'body',
    }),
    new UglifyWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: '/dist',
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    open: true,
    stats: 'minimal',
    hot: true,
  },
};
