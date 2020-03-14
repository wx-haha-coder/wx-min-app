// pages/shop/pay/index.js.js
const { Multiply } = require("../../../utils/util.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopId: 1,
    title: "美味差点",
    price: 129.22,
    coverUrl:
      "https://content-img.xindebaby.com/3da666be804548f0896cf2cc93f3f28e_900_500.jpg?imageMogr2/auto-orient/thumbnail/!690x690r/|imageslim",
    number: 1,
    canBuy: true,
    totalPrice: 129.22
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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
  }
});
