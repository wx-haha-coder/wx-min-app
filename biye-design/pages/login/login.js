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
    const that = this;
    console.log(e);
    wx.getUserInfo({
      success: function (res) {
        const { userInfo } = res;
        App.login(res)
      }
    })
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