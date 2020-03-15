const { submitOrder } = require('../../../api/shop');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // package_group/pages/product_detail/product_detail
    // pages/product_detail/product_detail
    // product_id=281&source=product_list&groupon=true
    detail: {
      id: 1,
      img_url: "https://content-img.xindebaby.com/tuan/images/281/cover.jpg?imageMogr2/auto-orient/thumbnail/!690x690r/|imageslim",
      price: 198,
      desc: 'MUA亲子游泳周中4家体验卡MUA亲子游泳周中4家体验卡MUA亲子游泳周中4家体验卡MUA亲子游泳周中4家体验卡MUA亲子游泳周中4家体验卡',
      title: "MUA亲子游泳周中4家体验卡",
      subTitle: "这是一个商品，欢迎来购买啊"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  handleBuy: function (e) {
    const { id } = e.currentTarget.dataset;
    const { detail } = this.data;
    wx.navigateTo({
      url: `/pages/shop/pay/index?shop_id=${id}`,
    })
  },
})