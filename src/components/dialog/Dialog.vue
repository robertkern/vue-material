<script>
import { MDCDialogFoundation, util } from '@material/dialog'

export default {
  name: 'mdc-dialog',
  data () {
    return {
      foundation: null,
      focusTrap: null,
      classes: [],
      surfaceInteractionHandlers: [],
      styles: {}
    }
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'aside'
    }
  },
  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    },
    isOpen () {
      return this.foundation.isOpen()
    },
    getChildWithClass (vm, className) {
      let els = this.getChildrenWithClass(vm, className)

      return (els.length > 0) ? els[0] : null
    },
    getChildrenWithClass (vm, className) {
      if (vm.$children) {
        let els = Array.filter(vm.$children, (childVm) => {
          return childVm.$el.className.indexOf(className) >= 0
        })

        return els
      }

      return []
    }
  },
  mounted () {
    let vm = this

    // Prepare the focus trap with accept button in-focus
    let footer = vm.getChildWithClass(vm, 'mdc-dialog__footer')
    let footerButtons = []
    let acceptBtnEl = null

    if (footer) {
      let acceptBtn = vm.getChildWithClass(footer, MDCDialogFoundation.cssClasses.ACCEPT_BTN)

      if (acceptBtn) {
        acceptBtnEl = acceptBtn.$el
      }

      footerButtons = vm.getChildrenWithClass(footer, 'mdc-dialog__footer__button')
    }

    vm.focusTrap = util.createFocusTrapInstance(vm.$refs.surface, acceptBtnEl)

    vm.foundation = new MDCDialogFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      setStyle (propertyName, value) {
        vm.$set(vm.styles, propertyName, value)
      },
      addBodyClass (className) {
        document.getElementsByTagName('body')[0].classList.add(className)
      },
      removeBodyClass (className) {
        document.getElementsByTagName('body')[0].classList.remove(className)
      },
      eventTargetHasClass (target, className) {
        return target.classList.contains(className)
      },
      registerInteractionHandler (evt, handler) {
        vm.$on(evt, handler)
      },
      deregisterInteractionHandler (evt, handler) {
        vm.$off(evt, handler)
      },
      registerSurfaceInteractionHandler (evt, handler) {
        // todo - look at temporary drawer and try using vm.$refs.surface.addEventListener(evt, handler)
        vm.surfaceInteractionHandlers.push({ evt, handler })
      },
      deregisterSurfaceInteractionHandler (evt, handler) {
        let index = vm.surfaceInteractionHandlers.indexOf({ evt, handler })

        if (index >= 0) {
          vm.surfaceInteractionHandlers.splice(index, 1)
        }
      },
      registerDocumentKeydownHandler (handler) {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler (handler) {
        document.removeEventListener('keydown', handler)
      },
      notifyAccept () {
        vm.$emit('accept')
      },
      notifyCancel () {
        vm.$emit('cancel')
      },
      isDialog (el) {
        return el === vm.$refs.surface
      },
      trapFocusOnSurface () {
        vm.focusTrap.activate()
      },
      untrapFocusOnSurface () {
        vm.focusTrap.deactivate()
      },
      layoutFooterRipples () {
        footerButtons.forEach((button) => {
          if (button.ripple) {
            button.ripple.layout()
          }
        })
      },
      registerTransitionEndHandler (handler) {
        vm.$refs.surface.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler (handler) {
        vm.$refs.surface.removeEventListener('transitionend', handler)
      }
    })

    vm.foundation.init()
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        [MDCDialogFoundation.cssClasses.ROOT]: true,
        ...vm.classes
      },
      attrs: {
        role: 'alertdialog'
      },
      style: vm.styles
    }

    let surfaceVm = createElement('div', {
      class: {
        'mdc-dialog__surface': true // not defined in constants for some reason
      },
      on: {
        click (event) {
          vm.surfaceInteractionHandlers.map((handler) => {
            if (handler.evt === 'click') {
              handler.handler(event)
            }
          })
        }
      },
      ref: 'surface'
    }, vm.$slots.default)

    let backdropVm = createElement('div', {
      class: {
        [MDCDialogFoundation.cssClasses.BACKDROP]: true
      }
    })

    return createElement(vm.tag, data, [surfaceVm, backdropVm])
  }
}
</script>

<style lang="scss">
@import "@material/dialog/mdc-dialog.scss";
</style>
