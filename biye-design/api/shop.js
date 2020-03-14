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
    const { id } = params;
    const path = "/order/buyNow";
    return get(path);
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
    const path = '';
    return post(path, params);
  },
  /**
   * 差点列表
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} page
   * @params {number} search
   */
  getShopList: params => {
    const { id } = params;
    const path = "/goods/lists";
    return post(path, params);
  }
};
