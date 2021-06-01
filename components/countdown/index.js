import BaseComponent from '../../helpers/BaseComponent'

let timer
const formatCountdown = (time, fmt) => {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR

  const overDays = Math.floor(time / DAY)
  const overHours = Math.floor(time % DAY / HOUR)
  const overMinutes = Math.floor(time % DAY % HOUR / MINUTE)
  const overSeconds = Math.floor(time % DAY % HOUR % MINUTE / SECOND)

  let format = fmt || 'dd天hh小时mm分ss秒'
  const options = {
    'd+': overDays, // 日
    'h+': overHours, // 小时
    'm+': overMinutes, // 分
    's+': overSeconds, // 秒
  }

  for (let k in options) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (options[k]) : (('00' + options[k]).substr(('' + options[k]).length)))
    }
  }

  return format
}

BaseComponent({
  lifetimes: {
    attached () {
      this.setData({
        count: this.data.time
      })
      
      if (this.data.start) {
        this.onTap()
        this.onCountDown()
      }
    },
    detached () {
      timer && clearTimeout(timer)
    }
  },
  properties: {
    time: {
      type: Number,
      value: 5,
      observer: 'updated'
    },
    text: {
      type: String,
      value: '获取验证码'
    },
    reText: {
      type: String,
      value: '重新获取'
    },
    format: {
      type: String,
      value: 's秒'
    },
    start: {
      type: Boolean,
      value: false
    }
  },
  data: {
    first: true,
    count: 60,
    isCountdown: false
  },
  computed: {
    countdown () {
      return formatCountdown(this.data.count * 1000, this.data.format)
    }
  },
  methods: {
    updated (time) {
      this.setData({
        count: time
      })
    },
    onTap () {
      const { count, first, isCountdown } = this.data

      if (isCountdown || count <= 0) return

      if (first) {
        this.setData({
          first: false
        })
      }

      if (!isCountdown) {
        this.setData({
          isCountdown: true
        })
      }

      this.triggerEvent('start', {onCountDown: this.onCountDown.bind(this)})
    },
    onCountDown () {
      const { time, count } = this.data
      const next = count - 1

      this.setData({
        count: next
      })

      timer = setTimeout(() => {
        if (next <= 1) {
          this.setData({
            count: time,
            isCountdown: false
          })
          this.triggerEvent('over')
        } else {
          this.onCountDown()
        }
      }, 1000)
    }
  }
})
