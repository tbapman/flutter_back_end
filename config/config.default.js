// 引入egg-mongoose
const mongoose = require('mongoose');
module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false
      }
    }
  };
  config.keys = appInfo.name + '_1539588102822_7832'; // 此处的字符是自己设定的cookie加密码
  // 添加 view 配置，nunjucks是一个用来在服务器端渲染HTML的插件，用npm 安装即可
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  exports.mongoose = {
    url: 'mongodb://127.0.0.1:27017/mongoTest',
    // 链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
    options: {},
  };
  // add your config here
  config.middleware = [];
  return config;
};