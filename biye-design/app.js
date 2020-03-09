// app.js
const {
  login
} = require('./api/user.js')
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
  onLaunch() {
    this.checkLogin();
    this.initData();
  },
  checkLogin() {},
  initData() {
    const version = wx.getSystemInfoSync().SDKVersion;
    this.globalData.version = version;
  },
  loginCallback(callback) {
    const {
      loginStatus
    } = this.globalData;
    if (loginStatus) {
      callback();
    } else {
      this.loginReadyCallback = () => {
        callback();
      };
    }
  },
  login(data) {
    console.log('??? data', data)
    const params = {
      wxapp_id: '10002',
      user_info: data.rawData,
      encrypted_data: data.encryptedData,
      iv: data.iv,
      signature: data.signature,
    }
    login(params).then(resp => {
      console.log('??? login back', resp)

    })
  },
});