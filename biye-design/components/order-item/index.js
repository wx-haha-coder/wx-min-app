// components/order-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared',
    addGlobalClass: true,
  },
  externalClasses: ['x-order-item'],
  properties: {
    order: {
      type: Object,
      value: {},
    },
    goods: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
