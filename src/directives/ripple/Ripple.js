import { MDCRipple } from '@material/ripple'
import '@material/ripple/mdc-ripple.scss'

export default {
  name: 'mdc-ripple',
  bind (el, binding, vnode, oldVnode) {
    if (!binding.modifiers.custom) {
      el.classList.add('mdc-ripple-surface')
    }

    /*
    el.mdcRipple = MDCRipple.attachTo(el, {
      isUnbounded: (typeof binding.modifiers.unbounded !== 'undefined') ? binding.modifiers.unbounded : false
    })
    */

    el.mdcRipple = new MDCRipple(el)
    el.mdcRipple.unbounded = (typeof binding.modifiers.unbounded !== 'undefined') ? binding.modifiers.unbounded : false
  },
  unbind (el, binding, vnode, oldVnode) {
    if (!el.mdcRipple) {
      return
    }

    el.mdcRipple.destroy()
    delete el.mdcRipple
  }
}
