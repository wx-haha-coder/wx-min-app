/*eslint-disable*/
const { updateOrder, getGoodDetail } = require('../../../api/shop');

const { Multiply } = require('../../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods_id: '',
    order_id: '',
    title: '',
    price: '',
    coverUrl: '',
    number: 1,
    canBuy: true,
    totalPrice: '',
    showPayPopup: false
  },

  onLoad: function(option) {
    this.setData({
      order_id: option.order_id,
      number: option.number || 1,
      goods_id: option.goods_id,
    });

    this.getGoodDetail();
  },
  onShow: function(options) {
    const { number, price } = this.data;
    this.setData({
      totalPrice: Multiply(price, number + 1),
    });
  },

  handleReduce: function() {
    const { price, number } = this.data;
    if (number <= 1) {
      return;
    }
    this.setData({
      number: number - 1,
      totalPrice: Multiply(price, number - 1),
    });
  },
  handleAdd: function() {
    const { price, number } = this.data;
    this.setData({
      number: number + 1,
      totalPrice: Multiply(price, number + 1),
    });
  },

  prevSubmitOrder() {
    this.setData({
      showPayPopup: true,
    });
  },

  submitOrder: function() {
    wx.showLoading({
      mask: true,
    });
    const { number, order_id } = this.data;
    updateOrder({
      order_id: order_id,
      goods_num: number,
    })
      .then(resp => {
        if (resp.code === 1) {
          wx.showToast({
            title: '下单成功',
          });
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/user/order/index?type=1',
            });
          }, 100);
        }
      })
      .catch(() => {
        wx.showToast({
          title: '下单失败',
          icon: 'none',
        });
      });
  },

  getGoodDetail() {
    const { goods_id } = this.data;
    getGoodDetail({
      goods_id,
    }).then(resp => {
      if (resp.code === 1) {
        const {
          data: { detail },
        } = resp;
        this.setData({
          title: detail.goods_name,
          price: detail.goods_price,
          coverUrl: detail.image[0].file_path,
          number: this.data.number,
          canBuy: detail.goods_status.value === 10,
          totalPrice: Multiply(detail.goods_price, this.data.number),
        });
      }
    });
  },
  handleClose() {
    this.setData({
      showPayPopup: false,
    });
  },
});
