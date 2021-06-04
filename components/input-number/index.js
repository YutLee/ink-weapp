import BaseComponent from '../../helpers/BaseComponent'

/**
 * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
 * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
 */
/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision) {
  if (precision === void 0) { precision = 12; }
  return +parseFloat(num.toPrecision(precision));
}

const getValidValue = (value, min, max) => {
  let val = parseFloat(value)

  if (isNaN(val)) {
    return value
  }

  if (val < min) {
    val = min
  }

  if (val > max) {
    val = max
  }

  return val
}

let timer

BaseComponent({
  externalClasses: ['ink-input-class', 'ink-add-class', 'ink-cut-class'],
  properties: {
    value: {
      type: Number,
      value: 0
    },
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 999999
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: {
      type: Boolean,
      value: false
    },
    editAble: {
      type: Boolean,
      value: false
    }
  },
  data: {
    inputValue: 0,
    disabledMin: false,
    disabledMax: false,
    autoFocus: false
  },
  computed: {
    selectionEnd () {
      return (this.data.max + '').length
    }
  },
  observers: {
    value(value) {
      this.setValue(value, false)
    },
    'inputValue, min, max'(inputValue, min, max) {
      const disabledMin = inputValue <= min
      const disabledMax = inputValue >= max

      this.setData({
        disabledMin,
        disabledMax
      })
    }
  },
  lifetimes: {
    attached () {
      this.setValue(this.data.inputValue, false)
    },
    detached () {
      this.clearInputTimer()
    }
  },
  methods: {
    setValue(value, change = true) {
      const { min, max } = this.data
      const inputValue = strip(getValidValue(value, min, max))

      this.setData({
        inputValue
      })

      if (change) {
        this.triggerEvent('change', { value: inputValue })
      }
    },
    onAdd () {
      const { disabled, disabledMax, inputValue, step } = this.data

      if (disabled || disabledMax) return

      this.setValue(inputValue + step)
    },
    onCut () {
      const { disabled, disabledMin, inputValue, step } = this.data

      if (disabled || disabledMin) return

      this.setValue(inputValue - step)
    },
    onTouchStart () {
      if (!this.data.editAble) return

      this.setData({
        lastValue: this.data.inputValue,
        autoFocus: true
      })
    },
    onInput ({detail}) {
      const value = Number(detail.value)
      this.clearInputTimer()
      timer = setTimeout(() => {
        this.setValue(isNaN(value) ? this.data.lastValue : value)
      }, 250)
      this.triggerEvent('input', detail)
    },
    onFocus ({detail}) {
      this.triggerEvent('focus', detail)
    },
    onBlur ({detail}) {
      this.setData({
        autoFocus: false
      })
      this.triggerEvent('blur', detail)
    },
    clearInputTimer () {
      timer && clearTimeout(timer)
    }
  }
})
