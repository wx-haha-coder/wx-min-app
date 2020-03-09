const {
  env,
  apiBaseUrl
} = require('./env');

/**
 * request 封装
 * @param {Object} data - 参数
 * @param {Object} config - 请求配置
 * @param {string} config.method - 请求方法
 * @param {string} config.path - 请求网址
 * @param {callback} resolve - 成功回调
 * @param {callback} reject - 失败回调
 */
const request = (data, config, resolve, reject) => {
  const app = getApp();
  const token = app.globalData.jwt_token;
  const url = `${apiBaseUrl}${config.path}`;
  const {
    header,
    ...reset
  } = config.option;
  wx.request({
    url,
    method: config.method || 'GET',
    header: {
      Authorization: token ? `Bearer ${token}` : '',
      ...header,
    },
    ...reset,
    data: data || {},
    success: (res) => resolve(res.data),
    fail: (err) => reject(err),
  });
};

const get = (path, params) => {
  const config = {
    method: 'GET',
    path,
  };
  return new Promise((resolve, reject) => {
    request(params, config, resolve, reject);
  });
};

const post = (path, params, option) => {
  const config = {
    method: 'POST',
    path,
    option,
  };
  return new Promise((resolve, reject) => {
    request(params, config, resolve, reject);
  });
};

module.exports = {
  get,
  post,
};