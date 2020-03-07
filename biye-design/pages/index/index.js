const { home } = require('../../api/index');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showDots: true,
    bannerHeight: 380,
    bannerList: [{
      id: 1,
      imgUrl: '../../assets/img/home/banner/banner-1.jpeg'
    }, {
      id: 2,
      imgUrl: '../../assets/img/home/banner/banner-2.jpeg'
    }, {
      id: 3,
      imgUrl: '../../assets/img/home/banner/banner-3.jpeg'
    }],

    shopList: [{
      id: 1,
      imgUrl: '../../assets/img/home/banner/banner-3.jpeg',
      desc: '我是一件商品',
    }],
    listEnd: true,
    page: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // this.getList(options);
  },

  onReachBottom () {
    const { page } = this.data;
    const param = { page: page + 1 };
    this.setData(param);
    this.getList(param);
  },

  getList (param) {
    home.getList(param).then(resp => {
      this.setData({
        list: resp.data,
      });
    });
  },

  handleLike: (e) => {
    const { id } = e.currentTarget.dataset;
  },

  handleComment: (e) => {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/comment/index?id=${id}`,
    });
  },
});
