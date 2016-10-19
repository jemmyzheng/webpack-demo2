// webpack 基础配置
const path = require('path');

const buildPath = path.join(__dirname, '/../dist');
const defaultSettings = require('./defaultOpt');
const autoprefixer = require('autoprefixer-core');
const postcssColor = require('postcss-color-rebeccapurple');

const base = {
  entry: defaultSettings.getDefEntries(),
  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/',
  },
  debug: true,
  port: defaultSettings.defPort,
  module: defaultSettings.getDefModules(),
  plugins: defaultSettings.getDefPlugins(),
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.defPort,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    progress: true,
    colors: true,
    //配置代理
    /*proxy:{
      "/":path.join(__dirname,'/build')
    }*/
  },
  postcss: [autoprefixer, postcssColor],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.coffee'],
    alias: {
      assets: `${defaultSettings.srcPath}/assets/`,
      components: `${defaultSettings.srcPath}/components/`,
      entries: `${defaultSettings.srcPath}/entries/`,
      layouts: `${defaultSettings.srcPath}/layouts/`,
      pages: `${defaultSettings.srcPath}/pages/`,
      service: `${defaultSettings.srcPath}/service/`,
      routes: `${defaultSettings.srcPath}/routes/`,
      views: `${defaultSettings.srcPath}/views/`,
    },
  },
};

module.exports = base;
