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
    const path = "/api/order/getOrderList";
    return get(path, params);
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
  },

  /**
   * 点赞
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id
   * @params {number} status , 状态 1-已赞 0-取消
   */
  postLike: params => {
    const path = "/api/admire/addAdmire";
    return get(path, params);
  },

  /**
   * 获取点赞数
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品id
   */
  getAdmireCount: params => {
    const path = "/api/admire/getAdmire";
    return post(path, params);
  },

  /**
   * 获取收藏数
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品id
   */
  getCollectCount: params => {
    const path = "/api/collect/getCollect";
    return get(path, params);
  },

  /**
   * 获取评论数
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品id
   */
  getCommentCount: params => {
    const path = "/api/comment/getComment";
    return post(path, params);
  },

  /**
   * 收藏
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品id
   * @params {number} status , 状态 1-已赞 0-取消
   */
  postCollect: params => {
    const path = "/api/collect/addCollect";
    return get(path, params);
  },

  /**
   * 修改状态（支付）
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} order_id 订单ID
   */
  updateOrder: params => {
    const path = "/api/order/updateOrderStatus";
    return post(path, params);
  },

  /**
   * 修改状态（支付）
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品ID
   */
  getGoodDetail: params => {
    const path = "/api/goods/detail";
    return get(path, params);
  },

  /**
   * 评论
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品ID
   * @params {string} comment 评论内容
   */
  postComment: params => {
    const path = "/api/comment/addComment";
    return post(path, params);
  },

  /**
   * 评论列表
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品ID
   * @params {number} page 页码
   */
  getComments: params => {
    const path = "/api/comment/getCommentList";
    return post(path, params);
  },

  /**
   * 点赞状态
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品ID
   */
  getAdmireInfo: params => {
    const path = "/api/admire/getAdmireInfo";
    return get(path, params);
  },

  /**
   * 收藏状态
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} goods_id 商品ID
   */
  getCollectInfo: params => {
    const path = "/api/collect/getCollectInfo";
    return post(path, params);
  },
};
