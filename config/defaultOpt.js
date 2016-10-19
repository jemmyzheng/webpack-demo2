/**
* Created by zhengwei on 16/10/14.
* 默认设置
*/
const path = require('path');
const glob = require('glob');

const srcPath = path.join(__dirname, '/../src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// 自动加载 src/entries/*.js 目录下的文件作为入口js
const entryFiles = glob.sync(path.join(srcPath, '/entries/*.js'));
const entriesObj = entryFiles.reduce((memo, file) => {
  const name = path.basename(file, '.js');
  memo[name] = file; // eslint-disable-line
  return memo;
}, {});
const extractLess = new ExtractTextPlugin('[name].css');
const htmlPluginOpt = {
  template: path.join(srcPath, '/views/common.html'),
  inject: true,
  hash: true,
  minify: {
    removeComments: true,
    collapseWhitespace: false,
  },
};
// 设置默认的 webpack 插件
function getDefPlugins() {
  const plugins = [extractLess];
  // 根据入口文件生成对应的html
  // 一个入口文件对应一个html文件
  Object.keys(entriesObj).forEach((entryName) => {
    const conf = Object.assign(htmlPluginOpt, {
      filename: `${entryName}.html`,
      chunks: [entryName],
    });
    plugins.push(new HtmlwebpackPlugin(conf));
  });
  return plugins;
}

function getDefEntries() {
  return entriesObj;
}
// 配置默认的modules
function getDefModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.less$/, loader: extractLess.extract('style', '!css?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss!less') },
      { test: /\.css$/, loader: extractLess.extract('style', '!css') },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' },
    ],
  };
}

module.exports = {
  srcPath,
  publicPath: '/',
  defPort: 8686,
  getDefModules,
  getDefPlugins,
  getDefEntries,
};
