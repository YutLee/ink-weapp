// pages/data-display/countdown/index.js
Page({
  data: {
    
  },
  onTap ({detail}) {
    const { onCountDown } = detail

    onCountDown()
  }
})