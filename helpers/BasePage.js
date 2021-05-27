import computedBehavior from '../behaviors/computed'

const BaseComponent = (options = {}) => {
  Object.keys(options).forEach(key => {
    if (/^on/.test(key)) {
      if (!options.methods) {
        options.methods = {}
      }
      options.methods[key] = options[key]
    }
  })

  options.behaviors = [
    ...(options.behaviors = options.behaviors || []),
    computedBehavior
  ]

  // add default options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    ...options.options,
  }

  return Component(options)
}

export default BaseComponent
