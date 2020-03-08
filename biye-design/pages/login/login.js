const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 授权登录
   */
  getUserInfo(e) {
    const _this = this;
    console.log(e);
    App.getUserInfo(e, () => {
      // 跳转回原页面
      _this.onNavigateBack();
    });
  },

  /**
   * 暂不登录
   */
  onNotLogin() {
    this.onNavigateBack();
  },

  /**
   * 授权成功 跳转回原页面
   */
  onNavigateBack() {
    wx.navigateBack();
  },
})