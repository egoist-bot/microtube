// jshint esversion: 6, asi: true
// eslint-env es6

const path = require('path')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const packageJSON = require('./package.json')

let isDevelopmentMode = !(require('yargs').argv.p || false)

const config = {
  devServer: {
    hot: true,
    open: true,
    outputPath: path.join(__dirname, 'public'),
    noInfo: true,
    publicPath: './public',
    contentBase: './'
  },
  entry: {
    app: './app/main.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: './',
    filename: '[name].js'
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/lang$/, /moment$/),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        async: 'used-twice',
        minChunks(module, count) {
            return count >= 2;
        },
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new WriteFilePlugin({
      test: /\.js$/,
      useHashIndex: false
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
    new OfflinePlugin({
      externals: [
        '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.2/react-redux.min.js'
      ]
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        options: {
          minimize: true
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}

if (isDevelopmentMode) {
  console.log('env', process.env.NODE_ENV)
  console.log('dev')
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config
