import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    backIcon: {
      type: String,
      value: 'xiangzuo1'
    },
    statusBar: {
      type: Boolean,
      value: true
    },
    outline: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onBack () {
      wx.navigateBack({
        delta: 0
      })
    }
  }
})
