<script>
import { MDCDialogFoundation, util } from '@material/dialog'

export default {
  name: 'mdc-dialog',
  data () {
    return {
      foundation: null,
      focusTrap: null,
      classes: [],
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
  computed: {
    dialogSurface_ () {
      return this.$el.querySelector(MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR)
    },
    acceptButton_ () {
      return this.$el.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR)
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
    accept (notifyChange = false) {
      this.foundation.accept(notifyChange)
    },
    cancel (notifyChange = false) {
      this.foundation.cancel(notifyChange)
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

    let footerButtons = vm.$el.querySelectorAll('.mdc-dialog__footer__button')
    vm.focusTrap = util.createFocusTrapInstance(vm.dialogSurface_, vm.acceptButton_)

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
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler (evt, handler) {
        vm.$el.removeEventListener(evt, handler)
      },
      registerSurfaceInteractionHandler (evt, handler) {
        vm.dialogSurface_.addEventListener(evt, handler)
      },
      deregisterSurfaceInteractionHandler (evt, handler) {
        vm.dialogSurface_.removeEventListener(evt, handler)
      },
      registerDocumentKeydownHandler (handler) {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler (handler) {
        document.removeEventListener('keydown', handler)
      },
      notifyAccept () {
        vm.$emit('accept')
        vm.$emit(MDCDialogFoundation.strings.ACCEPT_EVENT)
      },
      notifyCancel () {
        vm.$emit('cancel')
        vm.$emit(MDCDialogFoundation.strings.CANCEL_EVENT)
      },
      isDialog (el) {
        return vm.dialogSurface_
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
        vm.dialogSurface_.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler (handler) {
        vm.dialogSurface_.removeEventListener('transitionend', handler)
      }
    })

    vm.foundation.init()
  },
  beforeDestroy () {
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
      }
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
