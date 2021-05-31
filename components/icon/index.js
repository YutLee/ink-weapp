import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    size: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: ''
    }
  },
  computed: {
    style () {
      const { size } = this.data
      const sizeList = {S: 28, M: 32, L: 36, XL: 40}
      return size ? `font-size: ${sizeList[size] ? sizeList[size] : size}rpx` : ''
    }
  }
})
