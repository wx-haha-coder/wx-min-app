const { Multiply } = require("../../../utils/util.js");
const { shop } = require("../../../api/index.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods_id: 10002,
    title: "美味差点",
    price: 129.22,
    coverUrl:
      "https://content-img.xindebaby.com/3da666be804548f0896cf2cc93f3f28e_900_500.jpg?imageMogr2/auto-orient/thumbnail/!690x690r/|imageslim",
    number: 2,
    canBuy: true,
    totalPrice: 129.22
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const { number, price } = this.data;
    this.setData({
      totalPrice: Multiply(price, number + 1)
    })
  },

  handleReduce: function() {
    const { price, number } = this.data;
    if (number <= 1) {
      return;
    }
    this.setData({
      number: number - 1,
      totalPrice: Multiply(price, number - 1)
    });
  },
  handleAdd: function() {
    const { price, number } = this.data;
    this.setData({
      number: number + 1,
      totalPrice: Multiply(price, number + 1)
    });
  },

  submitOrder: function() {
    wx.showLoading({
      mask: true
    });
    const { goods_id, number } = this.data;
    shop
      .submitOrder({
        goods_id,
        goods_num: number
      })
      .then(resp => {
        if (resp.code === 1) {
          wx.showToast({
            title: "下单成功"
          });
          setTimeout(()=>{
            wx.navigateTo({
              url: '/pages/user/order/index?type=1',
            })
          },100)
        }
      })
      .catch(() => {
        wx.showToast({
          title: "下单失败",
          icon: "none"
        });
      });
  }
});
