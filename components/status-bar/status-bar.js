Component({
  data: {
    statusBarHeight: 20
  },
  lifetimes: {
    attached () {
      wx.getSystemInfo({
        success: (result) => {
          this.setData({
            statusBarHeight: result.statusBarHeight
          })
        }
      })
    }
  }
})
