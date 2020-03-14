Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: Number,
      value: null
    },
    coverUrl: {
      type: String,
      value: null
    },
    title: {
      type: String,
      value: null
    },
    price: {
      type: String,
      value: null
    },
    number: {
      type: String,
      value: null
    },
    totalPrice: {
      type: String,
      value: ''
    }
  },
  data: {
    reduceDisabled: "../../assets/img/shop/reduce_disabled.png",
    reduceIcon: "../../assets/img/shop//reduce_icon.png",
    addIcon: "../../assets/img/shop//add_icon.png"
  },
  methods: {
    reduce() {
      const that = this;
      that.triggerEvent("reduce");
    },
    add() {
      const that = this;
      that.triggerEvent("add");
    }
  }
});
