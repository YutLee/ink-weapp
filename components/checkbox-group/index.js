import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false
  },
  relations: {
    '../checkbox/index': {
      type: 'child',
      linked (target) {
        const idxs = this.data.idxs
        idxs.push(target.data.currentChecked)
        this.setData({
          idxs
        })
      }
    },
  },
  properties: {
    value: {
      type: String,
      value: ''
    }
  },
  data: {
    idxs: [],
    currentChecked: false
  },
  methods: {
    onChange (idx, value) {
      const elements = this.getRelationNodes('../checkbox/index')
      const { idxs, currentChecked } = this.data
      const allCheckeds = elements.filter(item => item.data.currentChecked)

      if (allCheckeds.length === idxs.length) {
        if (!currentChecked) {
          this.triggerEvent('change', {checked: true, idx, value})
        }

        this.setData({
          currentChecked: true
        })
      } else {
        this.triggerEvent('change', {checked: false, idx, value})

        this.setData({
          currentChecked: false
        })
      }
    }
  }
})