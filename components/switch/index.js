Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    onTap () {
      const current = !this.data.checked
      if (this.data.disabled) return

      this.setData({
        checked: current
      })

      this.triggerEvent('change', {checked: current})
    }
  }
})
