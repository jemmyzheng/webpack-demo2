const path = require('path');
const glob = require('glob');

const srcPath = path.join(__dirname, '/../src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// load src/entries/*.js as entry automatically
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
// set default webpack plugins
function getDefPlugins() {
  const plugins = [extractLess];
  // set the html file by entry file's number
  // one entry match one html
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
// set the default modules object for webpack
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
      { test: /\.less$/, loader: extractLess.extract('style', '!css?modules&importLoaders=1&localIdentName=[name]_[local]___[hash:base64:5]!postcss!less') },
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
