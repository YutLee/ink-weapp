// pages/data-entry/checkbox/index.js
Page({
  data: {
    list: [{
      name: '北京',
      value: '0',
      checked: true
    }, {
      name: '深圳',
      value: '1',
      checked: true
    }, {
      name: '广州',
      value: '2',
      checked: true
    }],
    allChecked: false
  },
  onChange ({detail}) {
    wx.showToast({
      title: `${(detail.checked ? '选中' : '取消选中') + detail.value}`,
      icon: 'none'
    })
  },
  onChangeAll ({detail}) {
    const list = [...this.data.list]
    list.forEach(item => {
      item.checked = detail.checked
    })
    this.setData({
      list
    })
  },
  onAllChange ({detail}) {
    this.setData({
      allChecked: detail.checked
    })
  },
  onChangeCheckeds ({detail}) {
    const list = [...this.data.list]
    const current = list.find(item => item.value === detail.value)
    current.checked = detail.checked

    this.setData({
      list
    })
  }
})