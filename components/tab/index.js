import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../tabs/index': {
      type: 'parent',
      linked (target) {
        const idx = target.data.idxs.length - 1
        const active = target.data.current === idx
        const scroll = target.data.scroll

        this.setData({
          idx,
          active,
          scroll
        })
      }
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    idx: 0,
    active: false,
    scroll: false
  },
  methods: {
    onTap () {
      const parent = this.getRelationNodes('../tabs/index')[0]

      if (!parent) {
        return
      }
      
      if (!this.data.scroll) {
        parent.onItemClick(this.data.idx)
      } else {
        this.createSelectorQuery().select('.ink-tab').boundingClientRect(res => {
          parent.onItemClick(this.data.idx, res)
        }).exec()
      }
    }
  }
})
