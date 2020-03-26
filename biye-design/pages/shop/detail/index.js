const {
  submitOrder,
  getAdmireCount,
  getGoodDetail,
  postLike,
  getCollectCount,
  postCollect,
  getAdmireInfo,
  getCollectInfo
} = require("../../../api/shop");

const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    id: "",
    likeNum: 0,
    likeStatus: false,
    collectNum: 0,
    collectStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id
    });
  },

  onShow: function() {
    this.getDetail();
    this.getLikeCount();
    this.getCollectCount();
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
  },

  getDetail: function() {
    const { id } = this.data;
    getGoodDetail({
      goods_id: id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          detail: resp.data.detail
        });
      }
    });
  },

  handleLike: function() {
    const isLogin = App.checkLogin(true);
    const { id } = this.data;
    if (isLogin) {
      postLike({
        goods_id: id,
        status: 1
      }).then(resp => {
        if (resp.code === 1) {
          this.setData({
            likeStatus: 1,
            likeNum: this.data.likeNum + 1
          });
        }
      });
    }
  },

  handleCollect: function() {
    const isLogin = App.checkLogin(true);
    const { id } = this.data;
    if (isLogin) {
      postCollect({
        goods_id: id,
        status: 1
      }).then(resp => {
        if (resp.code === 1) {
          this.setData({
            collectStatus: true,
            collectNum: this.data.collectNum + 1
          });
        }
      });
    }
  },

  getCollectCount: function() {
    getCollectCount({
      goods_id: this.data.id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          collectNum: resp.data.count
        });
      }
    });
  },

  getLikeCount: function() {
    getAdmireCount({
      goods_id: this.data.id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          likeNum: resp.data.count
        });
      }
    });
  }
});
