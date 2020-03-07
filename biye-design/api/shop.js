const { get, post } = require('../utils/request');

export const shop = {
  /**
   * 购买下单
   */
  submitOrder: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/`;
    return get(path);
  },
  /**
   * 订单列表
   */
  getOrderList: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/create/`;
    return post(path, params);
  },
  /**
   * 获取评论列表
   */
  getCommentList: (params) => {
    const { id } = params;
    const path = `/user/event/${id}/address/create/`;
    return post(path, params);
  },
};
