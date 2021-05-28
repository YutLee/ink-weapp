import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    size: {
      type: String,
      value: 'M'
    },
    type: {
      type: String,
      value: ''
    }
  },
  computed: {
    fontSize () {
      const { size } = this.data
      const sizeList = {S: 28, M: 32, L: 36, XL: 40}
      return sizeList[size] ? sizeList[size] : size
    }
  }
})
