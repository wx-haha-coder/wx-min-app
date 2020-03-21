const {
  get,
  post
} = require("../utils/request");

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
    const path = '/api/order/getOrderList';
    return get(path, params);
  },
  /**
   * 获取评论列表
   */
  getCommentList: params => {
    const {
      id
    } = params;
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
  },
  /**
   * 获取点赞数
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品id
   */
  // /api/admire/getAdmire&wxapp_id=10001&token=&goods_id=XXX
  getAdmireCount: params => {
    const path = "/api/admire/getAdmire";
    return post(path, params);
  },

  // 
  /**
   * 修改状态（支付）
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} order_id 订单ID
   */
  // /api/order/updateOrderStatus&order_id=10002&wxapp_id=10001&token=
  updateOrder: params => {
    const path = "/api/order/updateOrderStatus";
    return post(path, params);
  },
};