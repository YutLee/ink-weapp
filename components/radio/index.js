import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../radio-group/index': {
      type: 'parent',
      linked (target) {
        const idx = target.data.idxs.length - 1
        const checked = target.data.currentValue === this.data.value

        this.setData({
          idx,
          checked
        })

        if (checked) {
          target.setData({
            current: idx
          })
        }
      }
    }
  },
  externalClasses: ['yos-checked-class', 'yos-icon-class', 'yos-checked-icon-class'],
  properties: {
    icon: {
      type: String,
      value: 'yuanxingweixuanzhong'
    },
    checkedIcon: {
      type: String,
      value: 'danxuan'
    },
    label: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'left'
    }
  },
  data: {
    idx: 0,
    checked: false
  },
  methods: {
    onTap () {
      const parent = this.getRelationNodes('../radio-group/index')[0]
      const { disabled, idx, value } = this.data

      if (disabled || !parent) return

      parent.onChange(idx, value)
    }
  }
})
