// app.js
const { login } = require("./api/user.js");
App({
  /**
   *  globalData
   *  定义全局变量，可以在任意页面中访问
   */
  globalData: {
    loginStatus: "",
    apiToken: "",
    systemInfo: "",
    loction: "",
    isiPhoneX: false
  },
  onLaunch() {
    this.checkLogin();
    this.initData();
  },
  checkLogin() {
    return (
      wx.getStorageSync("token") != "" && wx.getStorageSync("user_id") != ""
    );
  },
  initData() {
    const version = wx.getSystemInfoSync().SDKVersion;
    this.globalData.version = version;
  },
  loginCallback(callback) {
    const { loginStatus } = this.globalData;
    if (loginStatus) {
      callback();
    } else {
      this.loginReadyCallback = () => {
        callback();
      };
    }
  },
  login(data, back) {
    const params = {
      wxapp_id: "10001",
      user_info: data.rawData,
      encrypted_data: data.encryptedData,
      iv: data.iv,
      signature: data.signature
    };
    const that = this;
    // 执行微信登录
    wx.login({
      success(res) {
        wx.showLoading({
          mask: true
        });
        login({
          ...params,
          code: res.code
        })
          .then(resp => {
            wx.hideLoading();
            if (resp.code === 1) {
              // 记录token user_id
              wx.setStorageSync("token", resp.data.token);
              wx.setStorageSync("user_id", resp.data.user_id);
              that.globalData.token = resp.data.token;
              that.globalData.user_id = resp.data.user_id;
              if (back) {
                back(resp.data);
              }
            } else {
              wx.showToast({
                icon: "none",
                title: resp.msg
              });
            }
          })
          .catch(() => {
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: "网络异常"
            });
          });
      }
    });
  }
});
