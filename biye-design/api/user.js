const { get, post } = require('../utils/request');

export const user = {
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
