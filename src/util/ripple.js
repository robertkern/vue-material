import { MDCRippleFoundation } from '@material/ripple'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'
import '@material/ripple/mdc-ripple.scss'

export default class VueMaterialRipple {
  constructor (vm, options) {
    const MATCHES = getMatchesProperty(HTMLElement.prototype)

    let foundationOptions = Object.assign({
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => false,
      isSurfaceActive: () => vm.$el[MATCHES](':active'),
      isSurfaceDisabled: () => vm.$el.disabled,
      addClass: (className) => vm.$el.classList.add(className),
      removeClass: (className) => vm.$el.classList.remove(className),
      registerInteractionHandler: (evtType, handler) => vm.$el.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => vm.$el.removeEventListener(evtType, handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => vm.$el.style.setProperty(varName, value),
      computeBoundingRect: () => vm.$el.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset})
    }, options)

    this.foundation = new MDCRippleFoundation(foundationOptions)

    return this.foundation
  }

  activate () {
    this.foundation.activate()
  }

  deactivate () {
    this.foundation.deactivate()
  }

  layout () {
    this.foundation.layout()
  }
}
