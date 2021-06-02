import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false
  },
  relations: {
    '/components/accordion/index': {
      type: 'child',
      linked() {
        const idxs = this.data.idxs
        idxs.push(idxs.length)
        this.setData({
          idxs
        })
      }
    },
  },
  properties: {
    current: {
      type: Number,
      value: 0
    }
  },
  data: {
    idxs: [],
    active: 0
  },
  methods: {
    onItemClick (idx) {
      const elements = this.getRelationNodes('/components/accordion/index')
      const { active } = this.data

      if (idx !== active) {
        elements[active].setData({
          show: false
        })
      }

      elements[idx].setData({
        show: !elements[idx].data.show
      })
      
      this.setData({
        active: idx
      })
    }
  }
})
