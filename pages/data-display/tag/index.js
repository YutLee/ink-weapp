// pages/data-display/tag/index.js
Page({
  data: {
    show: true
  },
  onClose () {
    this.setData({
      show: false
    })
  },
  onToggle () {
    this.setData({
      show: !this.data.show
    })
  }
})