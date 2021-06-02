import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    outline: {
      type: Boolean,
      value: false
    },
    clear: {
      type: Boolean,
      value: false
    },
    label: {
      type: String,
      value: ''
    },
    status: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'	
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    placeholderClass: {
      type: String,
      value: 'input-placeholder'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 0
    },
    autoFocus: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: 'done'
    },
    alwaysEmbed: {
      type: Boolean,
      value: false
    },
    confirmHold: {
      type: Boolean,
      value: false
    },
    cursor: {
      type: Number,
      value: 0
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    holdKeyboard: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showClear: false
  },
  methods: {
    onClear () {
      this.setData({
        value: ''
      })
    },
    onInput (event) {
      const { value } = event.detail

      if (value) {
        this.setData({
          showClear: true
        })
      }
      
      this.triggerEvent('input', event)
    },
    onFocus (event) {
      const { value } = event.detail

      if (value) {
        this.setData({
          showClear: true
        })
      }

      this.triggerEvent('focus', event)
    },
    onBlur (event) {
      const { value } = event.detail

      this.setData({
        showClear: false
      })

      this.triggerEvent('blur', event)
    },
    onConfirm (event) {
      const { value } = event.detail
      this.triggerEvent('confirm', event)
    }
  }
})
