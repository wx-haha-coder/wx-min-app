var App = getApp();


Page({
  data: {
    userInfo: null,
    version: '',
    token: '',
    location: [],
  },

  onShow() {
    this.getUserData();
  },

  // 获取用户信息
  getUserData() {
    const that = this;
    if (App.checkLogin()) {
      that.setData({
        token: wx.getStorageSync('token'),
      });

      if(!this.data.userInfo){
        wx.showLoading({mask:true})
        App.getUserInfo(function(res) {
          const { userInfo } = res;
          wx.hideLoading()
          that.setData({
            userInfo,
            location: [userInfo.province, userInfo.city].join(' / '),
          });
        });
      }
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
    const { link , auth } = e.currentTarget.dataset;
    if(auth != 1){
      this.goLink(link);
      return
    }
    const isLogin =  App.checkLogin(true)
    if(isLogin){
      this.goLink(link);
    }
  },

  goLink(url){
    wx.navigateTo({
      url,
    });
  },

  handleLogout(){
    wx.showLoading({mask: true});
    App.logout();
    setTimeout(()=>{
      this.setData({userInfo: null , token:''});
      wx.hideLoading();
    },200)
  }
});
