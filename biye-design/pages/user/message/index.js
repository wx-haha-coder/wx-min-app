// pages/user/message/index.js
const { messageData } = require('../../../mock/data');
const { getDateDiff } = require('../../../utils/util');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    msgList: [],
    dataNull: false,
  },

  onShow() {
    const diffTime = 7 * 24 * 3600 * 1000;
    const now = Date.now();
    const list = messageData.filter(ele => {
      console.log(now - ele.create_date);
      return now - ele.create_date <= diffTime;
    });
    this.setData({
      msgList: this.formatDate(list),
      dataNull: list.length <= 0,
    });
  },

  formatDate(data) {
    return data.map(ele => ({
      ...ele,
      create_date: getDateDiff(ele.create_date),
    }));
  },
});
