Page({
  data: {

  },
  onChange ({ detail }) {
    wx.showToast({
      icon: 'none',
      title: `选择：${detail.value === '1' ? '男' : '女'}`
    })
  }
})