const webpack = require('webpack');
const mockApiConf = require('./mockApi/config');
const Server = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

const compiler = webpack(config);

// 初始化server
const app = new Server(compiler, config.devServer);
/*
* 根据模拟API配置,设置相关路由
* 本地测试时的测试接口都会在api下
* */
if (process.env.REACT_WEBPACK_ENV === 'dev') {
  Object.getOwnPropertyNames(mockApiConf).forEach((v) => {
    const apiArr = v.split(' ');
    app.app[apiArr[0]](`/api${apiArr[1]}`, mockApiConf[v]);
  });
}

app.listen(config.port, 'localhost', (err) => {
  if (err) { console.log(err); } // eslint-disable-line
  console.log("listen at http://localhost:" + config.port); // eslint-disable-line
  open(`http://localhost:${config.port}/webpack-dev-server/`);
});
