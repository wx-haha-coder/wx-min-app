const { getOrderList } = require('../../../api/shop');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      id: 1,
      label: '全部',
    }, {
      id: 2,
      label: '已完成',
    }, {
      id: 3,
      label: '待付款',
    }],
    currentTab: 1,
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
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getOrderList(param) {
    getOrderList(param).then(resp => {

    });
  },

  changeTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      currentTab: id,
    });
    this.getOrderList({ id });
  },
});
