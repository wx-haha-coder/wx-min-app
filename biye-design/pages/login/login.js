const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  onShow() {
    console.log(App.checkLogin());
    if (App.checkLogin()) {
      // this.navigateBack();
    }
  },

  /**
   * 授权登录
   */
  getUserInfo(e) {
    const that = this;
    App.getUserInfo(function(res) {
      App.login(res, () => {
        that.navigateBack();
      });
    });
  },

  /**
   * 暂不登录
   */
  onNotLogin() {
    this.navigateBack();
  },

  /**
   * 授权成功 跳转回原页面
   */
  navigateBack() {
    wx.navigateBack();
  }
});
