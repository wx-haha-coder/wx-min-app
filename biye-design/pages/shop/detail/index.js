/*eslint-disable*/
const {
  submitOrder,
  getAdmireCount,
  getGoodDetail,
  postLike,
  getCollectCount,
  postCollect,
  getAdmireInfo,
  getCollectInfo,
  getCommentCount
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
    collectStatus: false,
    commentNum: 0
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
    this.getCommentCount();
    this.getAdmireInfo();
    this.getCollectInfo();
  },

  handleBuy: function(e) {
    const { id } = this.data;
    const isLogin = App.checkLogin(true);
    if(!isLogin){
      return;
    }
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
          const id = this.data.id;
          wx.navigateTo({
            url: `/pages/shop/pay/index?order_id=${resp.data.insert_id}&goods_id=${id}`
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
    const { id, likeStatus } = this.data;
    if (isLogin) {
      postLike({
        goods_id: id,
        status: likeStatus ? 0 : 1
      }).then(resp => {
        if (resp.code === 1) {
          this.setData({
            likeStatus: !this.data.likeStatus,
          });
          this.getLikeCount();
        }
      });
    }
  },
  handleCollect: function() {
    const isLogin = App.checkLogin(true);
    const { id, collectStatus } = this.data;
    if (isLogin) {
      postCollect({
        goods_id: id,
        status: collectStatus ? 0 : 1
      }).then(resp => {
        if (resp.code === 1) {
          this.setData({
            collectStatus: !this.data.collectStatus,
          });
          this.getCollectCount();
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
  },
  getCommentCount: function() {
    getCommentCount({
      goods_id: this.data.id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          commentNum: resp.data.count
        });
      }
    });
  },
  getAdmireInfo: function() {
    getAdmireInfo({
      goods_id: this.data.id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          likeStatus: resp.data.status.value === 1
        });
      }
    });
  },

  getCollectInfo: function() {
    getCollectInfo({
      goods_id: this.data.id
    }).then(resp => {
      if (resp.code === 1) {
        this.setData({
          collectStatus: resp.data.status.value === 1
        });
      }
    });
  },

  handleComment() {
    const { id } = this.data;
    const isLogin = App.checkLogin(true);
    if (isLogin) {
      wx.navigateTo({
        url: `/pages/comment/index?id=${id}`
      });
    }
  }
});
