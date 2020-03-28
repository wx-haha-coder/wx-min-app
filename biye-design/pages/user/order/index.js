const { getOrderList } = require('../../../api/shop');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      {
        id: 1,
        label: '全部',
      },
      {
        id: 2,
        label: '已完成',
      },
      {
        id: 3,
        label: '待付款',
      },
    ],
    currentTab: 1,
    orderList: [],
    page: 1,
    end: false,
  },

  onLoad: function onLoad(options) {
    this.setData({
      currentTab: options.tab,
    });
  },

  onReady: function onReady() {
    this.getOrderList();
  },

  onReachBottom: function onReachBottom() {
    const { page, end } = this.data;
    if (end) {
      return;
    }
    this.getOrderList({ page: page + 1 });
  },

  getOrderList(param) {
    const { currentTab, page } = this.data;
    let status = 0;
    if (currentTab === 1) {
      status = 0;
    } else if (currentTab === 2) {
      status = 20;
    } else if (currentTab === 3) {
      status = 10;
    }
    wx.showLoading({ mask: true });

    getOrderList({
      page,
      status,
      ...param,
    })
      .then(resp => {
        wx.hideLoading();
        if (resp.code === 1) {
          const {
            data: { list },
          } = resp;
          const { orderList } = this.data;
          this.setData({
            orderList: list.current_page > 1 ? orderList.concat(list.data) : list.data,
            page: list.current_page,
            end: list.current_page === list.last_page,
          });
        }
      })
      .catch(() => {
        wx.hideLoading();
        wx.showToast({
          title: '网络错误',
        });
      });
  },

  changeTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      currentTab: id,
      orderList: [],
    });
    this.getOrderList();
  },
});
