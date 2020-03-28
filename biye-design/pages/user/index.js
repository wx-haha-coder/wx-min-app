const App = getApp();

Page({
  data: {
    userInfo: App.globalData.userInfo,
    version: '',
    token: '',
    location: [],
  },

  onLoad() {
    this.getUserData();
  },

  // 获取用户信息
  getUserData() {
    const that = this;
    if (App.checkLogin()) {
      that.setData({
        token: wx.getStorageSync('token'),
      });
      App.getUserInfo(function(res) {
        const { userInfo } = res;
        that.setData({
          userInfo,
          location: [userInfo.province, userInfo.city].join(' / '),
        });
      });
    }
  },
  // 登录
  handleLogin() {
    wx.navigateTo({
      url: '/pages/login/login?next=/pages/user/index',
    });
  },

  // 跳转
  handleGoLink(e) {
    const { link } = e.currentTarget.dataset;
    wx.navigateTo({
      url: link,
    });
  },
});
