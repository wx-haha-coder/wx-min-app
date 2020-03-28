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
    loading: false,
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
    this.setData({
      loading: true
    })
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
        this.setData({
          loading: false
        })
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
        this.setData({
          loading: false
        })
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
  // 继续购买
  handleReBuy(e){
    const { orderList } =  this.data;
    const { id } = e.currentTarget.dataset;
    const item = orderList.find(ele=> ele.order_id == id);
    const { order_id, goods:[goodsItem] } = item;
    wx.navigateTo({
      url: `/pages/shop/pay/index?&order_id=${order_id}&goods_id=${goodsItem.goods_id}&number=${goodsItem.total_num}&showpay=1&fromPayList=1`
    })
  }
});
