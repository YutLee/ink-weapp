import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false
  },
  relations: {
    '/components/list/index': {
      type: 'child',
      linked: function(target) {
        if (!this.data.firstChild) {
          this.setData({
            firstChild: true
          })
        } else {
          target.setData({
            inGroup: true
          })
        }
      }
    },
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    outline: {
      type: Boolean,
      value: false
    }
  },
  data: {
    firstChild: false
  }
})