const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    overlay: true,
    proxy: {
      '/api': {
        target: 'https://reactjs-cdp.herokuapp.com/',
        pathRewrite: {'^/api' : ''},
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.(png|jpeg|jpg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              esModule: false,
            }
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Components: path.resolve(__dirname, 'src/app/components/'),
      Containers: path.resolve(__dirname, 'src/app/containers/'),
      Pages: path.resolve(__dirname, 'src/app/pages/'),
      Services: path.resolve(__dirname, 'src/app/services/'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/assets/react.svg'
    }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/assets', to: 'assets' },
    //   ],
    // }),
  ]
};