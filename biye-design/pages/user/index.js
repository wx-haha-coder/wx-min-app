const app = getApp();

Page({
  data: {
    userData: {
      id: null,
      name: '张大炮',
      avatar: 'https://avatar-img.xindebaby.com/5bf7e2d06972a69f444cce7f22286dcc1583325501?imageMogr2/auto-orient',
    },
    code: '',
    version: '',
  },

  onLoad () {
    this.setData({
      version: app.globalData.version,
    });
  },

  // 登录
  handleLogin () {
    const that = this;
    console.log(app);
    wx.login({
      success (res) {
        console.log('???', res);
        that.setData({
          code: res.code,
        });
      },
    });
  },
});
