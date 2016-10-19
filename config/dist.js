/**
* Created by zhengwei on 16/10/14.
* 基于生产环境打包
*/
const webpack = require('webpack');
const webpackBase = require('./base');

const distCon = Object.assign(webpackBase, {
  cache: false,
  devtool: 'sourcemap',
});
distCon.plugins = (webpackBase.plugins || []).concat(
  new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
);
module.exports = distCon;
