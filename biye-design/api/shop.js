const { get, post } = require("../utils/request");

module.exports = {
  /**
   * 购买下单
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id
   * @params {number} goods_num
   */
  submitOrder: params => {
    const path = "/api/order/buyNow";
    return get(path, params);
  },
  /**
   * 订单列表
   */
  getOrderList: params => {
    const { id } = params;
    const path = `/user/event/${id}/address/create/`;
    return post(path, params);
  },
  /**
   * 获取评论列表
   */
  getCommentList: params => {
    const { id } = params;
    const path = "";
    return post(path, params);
  },
  /**
   * 茶点列表
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} page
   * @params {number} search
   */
  getShopList: params => {
    const path = "/api/goods/lists";
    return post(path, params);
  }
};
