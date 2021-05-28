import computedBehavior from '../behaviors/computed'

const BaseComponent = (options = {}) => {
  options.externalClasses = [
    'yos-class',
    'yos-hover-class',
    ...(options.externalClasses = options.externalClasses || []),
  ]

  options.behaviors = [
    ...(options.behaviors = options.behaviors || []),
    computedBehavior
  ]

  // add default options
  options.options = {
    virtualHost: true,
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'apply-shared',
    ...options.options,
  }

  return Component(options)
}

export default BaseComponent
