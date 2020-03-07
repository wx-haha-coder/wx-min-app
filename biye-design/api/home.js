const { get, post } = require('../utils/request');

export const home = {
  /**
   * 获取首页列表
   */
  getList: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/`;
    return get(path);
  },
};
