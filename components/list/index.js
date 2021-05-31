import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../list-group/index': {
      type: 'parent'
    }
  },
  properties: {
    thumb: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    outline: {
      type: Boolean,
      value: false
    },
    arrow: {
      type: Boolean,
      value: true
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    inGroup: false
  },
  methods: {
    onTap () {
      const { url, disabled } = this.data

      if (url && !disabled) {
        wx.navigateTo({
          url
        })
      }
    }
  }
})
