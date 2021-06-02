import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../accordion-group/index': {
      type: 'parent',
      linked(target) {
        const idx = target.data.idxs.length - 1
        const show = target.data.active === idx

        this.setData({
          idx,
          show
        })
      }
    }
  },
  properties: {
    thumb: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'xiangxia2'
    }
  },
  data: {
    idx: 0,
    show: false
  },
  methods: {
    onTap () {
      const parent = this.getRelationNodes('../accordion-group/index')[0]
      
      if (!parent) {
        this.setData({
          show: !this.data.show
        })
        return
      }

      parent.onItemClick(this.data.idx)
    }
  }
})
