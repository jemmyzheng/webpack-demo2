const Mock = require('mockjs');

module.exports = {
  mock: Mock.mock,
  random: Mock.random,
  success(code, data) {
    return {
      isSuccess: true,
      code,
      data,
    };
  },
};
