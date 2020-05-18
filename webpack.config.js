const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : '';
const isProd = nodeEnv === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: isProd ? 'none' : 'eval-source-map',
  optimization: {
    minimize: isProd,
  },
  devServer: {
    port: 3000,
    inline: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    })
  ]
};