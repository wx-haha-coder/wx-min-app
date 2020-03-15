const { get, post } = require("../utils/request");

module.exports = {
  /**
   * 茶点列表
   * @params {string} wxapp_id
   * @params {string} token
   * @params {string} page
   * @params {number} search
   */
  getTeaList: params => {
    const path = "/api/goods/lists";
    return post(path, params);
  }
};
