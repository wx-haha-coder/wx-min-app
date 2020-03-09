const {
  get,
  post
} = require('../utils/request');

module.exports = {
  /**
   * 用户登录
   */
  login: (data) => {
    const path = `/school/web/index.php?s=/api/user/login`;
    return post(path, data, {
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      }
    });
  },
  /**
   * 用户退出
   */
  logout: (params) => {

  },
};