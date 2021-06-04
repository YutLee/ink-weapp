import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../checkbox-group/index': {
      type: 'parent',
      linked (target) {
        const idx = target.data.idxs.length - 1
        const checkeds = target.data.idxs.find(item => item)
        const checked = checkeds.length === idx.length

        target.setData({
          currentChecked: checked
        })
        target.triggerEvent('change', {checked, value: this.data.value})
       
        this.setData({
          idx,
          // currentChecked: target.data.currentChecked
        })
      }
    }
  },
  externalClasses: ['ink-checked-class', 'ink-icon-class', 'ink-checked-icon-class'],
  properties: {
    icon: {
      type: String,
      value: 'yuanxingweixuanzhong'
    },
    checkedIcon: {
      type: String,
      value: 'yuanxingxuanzhongfill'
    },
    label: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
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
  observers: {
    checked(checked) {
      this.setData({
        currentChecked: checked
      })
    }
  },
  lifetimes: {
    attached () {
      this.setData({
        currentChecked: this.data.checked
      })
    }
  },
  data: {
    idx: 0,
    currentChecked: false
  },
  methods: {
    onTap () {
      const parent = this.getRelationNodes('../checkbox-group/index')[0]
      const { disabled, idx, value, currentChecked } = this.data
      const checked = !currentChecked

      if (disabled) return

      this.setData({
        currentChecked: checked
      })
      this.triggerEvent('change', {checked, value})

      if (parent) {
        parent.onChange(idx, checked)
      }
    }
  }
})
