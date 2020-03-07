const { get, post } = require('../utils/request');

module.exports = {
  /**
   * 获取首页列表
   */
  getList: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/`;
    return get(path);
  },
};
