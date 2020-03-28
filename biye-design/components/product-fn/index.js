// components/product-fn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeCount: {
      type: Number,
      value: 0,
    },
    collectCount: {
      type: Number,
      value: 0,
    },
    commentCount: {
      type: Number,
      value: 0,
    },
    isLike: {
      type: Boolean,
      value: false,
    },
    isCollect: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleLike: function handleLike() {
      this.triggerEvent('onLike');
    },
    handleCollect: function handleLike() {
      this.triggerEvent('onCollect');
    },
    handleComment: function handleLike() {
      this.triggerEvent('onComment');
    },
  },
});
