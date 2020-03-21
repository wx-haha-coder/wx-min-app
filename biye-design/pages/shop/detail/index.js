const { submitOrder, getAdmireCount } = require("../../../api/shop");
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    id: "",
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    getAdmireCount({
      goods_id: this.data.id
    }).then(resp => {
      console.log(resp);
      if (resp.code === 1) {
        this.setData({
          count: resp.data.count
        });
      }
    });
  },
  handleBuy: function(e) {
    const { detail, id } = this.data;
    wx.showLoading({
      title: ""
    });
    submitOrder({
      goods_id: id,
      goods_num: 1
    })
      .then(resp => {
        wx.hideLoading();
        if (resp.code === 1) {
          wx.navigateTo({
            url: `/pages/shop/pay/index?order_id=${resp.data.insert_id}`
          });
        } else {
          wx.showToast({
            title: resp.msg,
            icon: "none"
          });
        }
      })
      .catch(() => {
        wx.hideLoading();
      });
  }
});
