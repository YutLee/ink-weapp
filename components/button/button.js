import BaseComponent from '../../helpers/BaseComponent'

BaseComponent({
  properties: {
    radius: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: 'L'
    },
    type: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: ''
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'zh_CN'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: {
      type: String,
      value: ''
    },
    sendMessagePath: {
      type: String,
      value: ''
    },
    sendMessageImg: {
      type: String,
      value: 'zh_CN'
    },
    appParameter: {
      type: String,
      value: ''
    },
    showMessageCard: {
      type: Boolean,
      value: false
    }
  }
})
