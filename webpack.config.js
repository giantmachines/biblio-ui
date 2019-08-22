require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const { CLIENT_PORT = 8080, NODE_ENV = 'development', SERVER_PORT = 3000 } = process.env;

const isProduction = NODE_ENV === 'production';

const plugins = [];
if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.tsx',
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  output: {
    filename: isProduction ? 'bundle.[contentHash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': isProduction ? 'react-dom' : '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.scss$/,
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src'),
        resolve: {
          extensions: ['.svg'],
        },
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    ...plugins,
    new webpack.EnvironmentPlugin({
      NODE_ENV,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: CLIENT_PORT,
    proxy: {
      '/api': `http://localhost:${SERVER_PORT}`,
    },
  },
};
