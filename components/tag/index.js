import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    status: {
      type: String,
      value: ''
    },
    closeAble: {
      type: Boolean,
      value: false
    },
    closeIcon: {
      type: String,
      value: ''
    },
    outline: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Boolean,
      value: false
    }
  },
  data: {
  },
  methods: {
    onClose () {
      this.triggerEvent('close')
    }
  }
})
