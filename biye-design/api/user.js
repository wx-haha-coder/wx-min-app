const { get, post } = require('../utils/request');

module.exports = {
  /**
   * 用户登录
   */
  login: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/`;
    return get(path);
  },
  /**
   * 用户退出
   */
  logout: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/create/`;
    return post(path, params);
  },
};
