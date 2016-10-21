/**
* Created by zhengwei on 16/10/14.
* 基于webpack-dev-server的本地开发服务器配置
*/
const webpack = require('webpack');
const webpackBase = require('./base');
const defaultSettings = require('./defaultOpt');
// 设置magic globals(魔力变量)
const definePlugin = new webpack.DefinePlugin({
  __DEV__: (process.env.REACT_WEBPACK_ENV === 'dev' ? 1 : 0),
});
const sfg = Object.assign(webpackBase, {
  cache: true,
  devtool: 'eval-source-map',
});
Object.getOwnPropertyNames((webpackBase.entry || {})).forEach((name) => {
  sfg.entry[name] = []
    .concat('webpack/hot/dev-server')
    .concat(`webpack-dev-server/client?http://127.0.0.1:${defaultSettings.defPort}`)
    .concat(webpackBase.entry[name]);
});
sfg.plugins = (webpackBase.plugins || []).concat(
  // 配置热加载
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  definePlugin
);
module.exports = sfg;
