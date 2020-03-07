// app.js
App({
  /**
   *  globalData
   *  定义全局变量，可以在任意页面中访问
   */
  globalData: {
    loginStatus: '',
    apiToken: '',
    systemInfo: '',
    loction: '',
    isiPhoneX: false,
  },
  onLaunch () {
    this.checkLogin();
    this.initData();
  },
  checkLogin () {
  },
  initData () {
    const version = wx.getSystemInfoSync().SDKVersion;
    this.globalData.version = version;
  },
  loginCallback (callback) {
    const { loginStatus } = this.globalData;
    if (loginStatus) {
      callback();
    } else {
      this.loginReadyCallback = () => {
        callback();
      };
    }
  },
});
