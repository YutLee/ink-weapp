import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false
  },
  relations: {
    '../radio/index': {
      type: 'child',
      linked () {
        const idxs = this.data.idxs
        idxs.push(idxs.length)
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
  observers: {
    value(value) {
      this.setData({
        currentValue: value
      })
    }
  },
  lifetimes: {
    attached () {
      this.setData({
        currentValue: this.data.value
      })
    }
  },
  data: {
    idxs: [],
    current: 0,
    currentValue: ''
  },
  methods: {
    onChange (idx, value) {
      const elements = this.getRelationNodes('../radio/index')
      const { current, currentValue } = this.data
      
      if (idx !== current && value !== currentValue) {
        elements[idx].setData({
          checked: true
        })

        elements[current].setData({
          checked: false
        })

        this.setData({
          current: idx,
          currentValue: value
        })

        this.triggerEvent('change', {value})
      }
    }
  }
})