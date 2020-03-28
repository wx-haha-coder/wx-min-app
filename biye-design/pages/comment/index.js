const { getCommentList, postComment } = require('../../api/shop');
const { getDateDiff } = require('../../utils/util');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    commentList: [],
    id: '',
    page: 1,
    listEnd: false,
  },

  onLoad(options) {
    this.setData({
      id: options.id,
    });
  },

  onShow() {
    this.getComments();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    const { listEnd } = this.data;
    if (listEnd) {
      return;
    }

    this.getComments();
  },
  // 获取评论记录
  getComments() {
    const { id, commentList, page } = this.data;
    getCommentList({
      goods_id: id,
      page,
    }).then(resp => {
      if (resp.code === 1) {
        const currPgae = resp.data.current_page;
        const lastPage = resp.data.last_page;
        commentList.unshift(...this.dateFilter(resp.data.data));
        this.setData({
          commentList: [...commentList],
          listEnd: currPgae === lastPage && commentList.length > 0,
          page: resp.data.current_page,
        });
      }
    });
  },
  handleInput(e) {
    this.data.comment = e.detail.value;
  },
  // 评论
  handleComment() {
    const { id, comment } = this.data;
    wx.showLoading({ mask: true });
    postComment({
      goods_id: id,
      comment,
    })
      .then(resp => {
        wx.hideLoading();
        if (resp.code === 1) {
          this.setData({
            comment: '',
            page: 1,
          });
          this.getComments();
        } else {
          wx.showToast({
            title: resp.msg || '未知错误',
            icon: 'none',
          });
        }
      })
      .catch(err => {
        console.log(err);
        wx.hideLoading();
        wx.showToast({
          title: '网络错误',
          icon: 'none',
        });
      });
  },
  dateFilter(data) {
    return data.map(ele => ({
      ...ele,
      create_time: getDateDiff(getDateDiff * 1000),
    }));
  },
});
