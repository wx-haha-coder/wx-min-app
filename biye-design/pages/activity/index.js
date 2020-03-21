const { home } = require("../../api/index");
const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showDots: true,
    bannerHeight: 380,
    bannerList: [
      {
        id: 1,
        imgUrl: "../../assets/img/home/banner/banner-1.jpeg"
      },
      {
        id: 2,
        imgUrl: "../../assets/img/home/banner/banner-2.jpeg"
      },
      {
        id: 3,
        imgUrl: "../../assets/img/home/banner/banner-3.jpeg"
      }
    ],

    shopList: [],
    listEnd: false,
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList(options);
  },

  onReachBottom() {
    // const { page } = this.data;
    // const param = { page: page + 1 };
    // this.setData(param);
    // this.getList(param);
  },

  getList(param) {
    home.getTeaList({ ...param, search: "" }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          shopList: resp.data.list.data,
          page: resp.data.list.current_page
        });
      }
    });
  },

  handleLike: e => {
    const { id } = e.currentTarget.dataset;
  },

  handleComment: e => {
    const isLogin = App.checkLogin();
    const { id } = e.currentTarget.dataset;
    if (!isLogin) {
      wx.navigateTo({
        url:
          "/pages/login/login?next=/" +
          encodeURIComponent(`/pages/comment/index?id=${id}`)
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/comment/index?id=${id}`
    });
  },

  goDetail: e => {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/shop/detail/index?id=${id}`
    });
  }
});
