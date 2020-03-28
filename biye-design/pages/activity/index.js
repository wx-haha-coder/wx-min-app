const { home } = require('../../api/index');

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
        imgUrl: 'http://47.105.164.12/school/web/uploads/school1.png',
      },
      {
        id: 2,
        imgUrl: 'http://47.105.164.12/school/web/uploads/school2.png',
      },
      {
        id: 3,
        imgUrl: 'http://47.105.164.12/school/web/uploads/school3.png',
      },
    ],
    activityList: [
      {
        id: 1,
        title: '2019年第九届全国大学生电子商务“创新创意及创业”挑战赛',
        imgUrl: 'http://47.105.164.12/school/web/uploads/school1.png',
        date: '2019-12-24',
      },
      {
        id: 2,
        title: '2019年银杏 “英语竞赛”',
        imgUrl: 'http://47.105.164.12/school/web/uploads/school2.png',
        date: '2019-06-10',
      },
      {
        id: 3,
        title: '2020年应届毕业生“银杏双选会”',
        imgUrl: 'http://47.105.164.12/school/web/uploads/school1.png',
        date: '2019-10-31',
      },
    ],
    listEnd: false,
    page: 1,
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
    home.getTeaList({ ...param, search: '' }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          shopList: resp.data.list.data,
          page: resp.data.list.current_page,
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
        url: '/pages/login/login?next=/' + encodeURIComponent(`/pages/comment/index?id=${id}`),
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/comment/index?id=${id}`,
    });
  },

  goDetail: e => {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/shop/detail/index?id=${id}`,
    });
  },
});
