const { getCommentList } = require('../../api/shop');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentList: [{
      user_name: '张议案',
      user_avatar: 'https://avatar-img.xindebaby.com/425532248a38ed46e0bad450d8a9982f1581297642.37?imageMogr2/auto-orient',
      comment_time: '2019-01-23 22:10',
      comment_word: '大萨达撒绝对是卡大家快来撒娇打开了撒娇的考虑撒娇',
    }],
    productId: '',
    page: 1,
    listEnd: true,
  },

  onLoad (options) {
    this.setData({
      productId: options.id,
    });
  },

  onShow () {
    this.getComments();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    const { listEnd } = this.data;
    if (listEnd) {
      return;
    }
    this.getComments();
  },
  // 获取评论记录
  getComments () {
    const { productId, commentList } = this.data;
    getCommentList({
      productId,
    }).then(resp => {
      if (resp.status === 0) {
        this.setData({
          commentList: commentList.concat(...resp.data),
          listEnd: resp.data.listEnd,
        });
      }
    });
  },
});
