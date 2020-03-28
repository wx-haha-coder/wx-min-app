// app.js
const { login } = require("./api/user.js");
App({
  /**
   *  globalData
   *  定义全局变量，可以在任意页面中访问
   */
  globalData: {
    loginStatus: "",
    token: "",
    systemInfo: "",
    loction: "",
    isiPhoneX: false,
    userInfo: null
  },
  onLaunch() {
    this.checkLogin();
    this.initData();
  },
  checkLogin(goLogin) {
    const token = wx.getStorageSync("token");
    const userId = wx.getStorageSync("user_id");
    const isLogin = token && userId;
    if (isLogin) {
      return isLogin;
    }
    if (goLogin) {
      this.goLoginPage();
    }
    return !!isLogin;
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
              that.globalData.userInfo = data.userInfo;
              if (back) {
                back(resp.data);
              }
            } else {
              wx.showToast({
                icon: "none",
                title: resp.msg,
              });
            }
          })
          .catch(err => {
            console.error(err);
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: "网络异常"
            });
          });
      }
    });
  },

  getUserInfo(callback, fail) {
    wx.getUserInfo({
      lang: "zh_CN",
      success: function(res) {
        callback && callback(res);
      },
      fail: function() {
        fail && fail();
      }
    });
  },

  goLoginPage: function(path) {
    let toPath = path;
    if (!path) {
      let pages = getCurrentPages();
      let currPage = null;
      if (pages.length) {
        toPath = pages[pages.length - 1];
      }
    }
    wx.navigateTo({
      url: "/pages/login/login?next=/" + toPath
    });
  },
  
  logout(flag){
    wx.removeStorageSync("token");
    wx.removeStorageSync("user_id");
    // 是否回到首页
    if(flag){
      wx.switchTab({
        url:'/pages/index/index'
      })
    }
  }
});
