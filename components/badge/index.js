// components/badge/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: 'updated'
    },
    max: {
      type: Number,
      value: 99
    },
    dot: {
      type: Boolean,
      value: false
    },
    showZero: {
      type: Boolean,
      value: false
    },
    wrap: {
      type: Boolean,
      value: true
    },
    status: {
      type: String,
      value: ''
    },
    processing: {
      type: Boolean,
      value: false
    }
  },
  data: {
    finalCount: 0
  },
  methods: {
    updated (count) {
      const { max } = this.data
      this.setData({
        finalCount: count > max ? `${max}+` : count
      })
    }
  }
})
