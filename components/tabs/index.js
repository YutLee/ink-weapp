import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  options: {
    virtualHost: false  // virtualHost为true时，relations会失效
  },
  relations: {
    '../tab/index': {
      type: 'child',
      linked() {
        const idxs = this.data.idxs
        idxs.push(idxs.length)
        this.setData({
          idxs
        })
      }
    }
  },
  lifetimes: {
    attached () {
      this.setData({
        active: this.data.current
      })
    }
  },
  properties: {
    current: {
      type: Number,
      value: 0
    },
    direction: {
      type: String,
      value: 'horizontal'
    },
    scroll: {
      type: Boolean,
      value: false
    }
  },
  data: {
    idxs: [],
    active: 0,
    scrollTop: 0,
    scrollLeft: 0
  },
  methods: {
    onItemClick (idx, ele) {
      const elements = this.getRelationNodes('../tab/index')
      const { active, scroll, direction } = this.data
      
      if (scroll) {
        this.createSelectorQuery().select('.yos-tabs').scrollOffset((res) => {
          const info = wx.getSystemInfoSync()
          if (ele && res) {
            if (direction === 'horizontal') {
              this.setData({
                scrollLeft: ele.left + ele.width * .5 + res.scrollLeft - info.windowWidth * .5
              })
            } else {
              this.setData({
                scrollTop: ele.top + ele.height * .5 + res.scrollTop - info.windowHeight * .5
              })
            }
          }
        }).exec()
      }

      if (idx !== active) {
        elements[active].setData({
          active: false
        })
      }

      elements[idx].setData({
        active: true
      })

      this.setData({
        active: idx
      })

      this.triggerEvent('change', {idx})
    }
  }
})
