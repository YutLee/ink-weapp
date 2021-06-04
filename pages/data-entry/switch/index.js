Page({
  data: {
    
  },
  onChange ({detail}) {
    wx.showToast({
      title: `当前：${detail.checked ? '开' : '关'}`,
      icon: 'none'
    })
  }
})