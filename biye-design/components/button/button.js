Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /* button 类型 */
    type: {
      type: String,
      value: 'default', // primary | default | none
    },
    /* button 失效 */
    disabled: {
      type: Boolean,
      value: false,
    },
    /* button 图标 */
    icon: {
      type: String,
      value: null,
    },
    /* button 大小 */
    size: {
      type: String,
      value: 'default', // default | middle | large | smalll | mini
    },
    radius: {
      type: Number,
      value: false,
    },
  },
  externalClasses: ['x-btn-class'],
  data: {
    className: "x-button",
  },
  lifetimes: {
    attached () {
      const classNames = ['x-button', 'x-btn-class'];
      const { size, type, disabled, radius } = this.data;
      if (size === 'mini') {
        classNames.push('x-button-mini')
      }
      if (size === 'small') {
        classNames.push('x-button-small')
      }
      if (size === 'middle') {
        classNames.push('x-button-middle')
      }
      if (size === 'large') {
        classNames.push('x-button-large')
      }
      if (type === 'primary') {
        classNames.push('x-button-primary')
      }
      if (type === 'none') {
        classNames.push('x-button-none')
      }
      if (disabled) {
        classNames.push('is-disabled')
      }
      if (radius) {
        classNames.push('x-radius')
      }
      this.setData({
        className: classNames.join(' ')
      });
    }
  }
});
