/**
 * Created by jemmy on 16/7/16.
 * 配置模拟API
 */
const result = require('./result');

const MockAPI = {
  'get /login': function reqCb(req, res) {
    res.json(result.success(1));
  },
  'get /checkPW': function checkPW(req, res) {
    res.json(result.success(1));
  },
};

module.exports = MockAPI;
