const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: "development",
  entry: "./index.js", //application starts from
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //rules applies to jsx and js
        exclude: /node_modules/, //ignores node_modules
        use: {
          loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', //injects CSS into DOM
          'css-loader' //resolves import and url()
        ]
      }
    ]
  },
  resolve: {extensions:['.jsx', '.js', '.css']},
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' //copy new html using this template
    })
  ],
  devServer: {
    host: 'localhost', //where to run
    historyApiFallback: true, //server will fallback in serving the specified HTML for SPA, usually index.HTML
    port: 8080, //port given to execute the app
    open: true, //opens a new tab
    hot: true, //enable webpack's Hot Module Replacement
  }
}