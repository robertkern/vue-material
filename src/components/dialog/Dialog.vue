<script>
import { MDCDialogFoundation } from '@material/dialog'

export default {
  name: 'mdc-dialog',
  data () {
    return {
      foundation: null,
      classes: [],
      surfaceInteractionHandlers: [],
      styles: {
        visibility: 'hidden'
      }
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
    getChildWithTag (tagName) {
      if (this.$children) {
        let el = Array.filter(this.$children, (vm) => {
          return vm.$el.nodeName.toLowerCase() === tagName.toLowerCase()
        })

        return (el.length > 0) ? el[0] : null
      }

      return null
    }
  },
  mounted () {
    let vm = this

    this.foundation = new MDCDialogFoundation({
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
      }
    })

    this.foundation.init()
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-dialog': true,
        ...vm.classes
      },
      attrs: {
        role: 'alertdialog'
      },
      style: vm.styles
    }

    let surfaceVm = createElement('div', {
      class: {
        'mdc-dialog__surface': true
      },
      on: {
        click (event) {
          vm.surfaceInteractionHandlers.map((handler) => {
            if (handler.evt === 'click') {
              handler.handler(event)
            }
          })
        }
      }
    }, vm.$slots.default)

    let backdropVm = createElement('div', {
      class: {
        'mdc-dialog__backdrop': true
      }
    })

    return createElement(vm.tag, data, [surfaceVm, backdropVm])
  }
}
</script>

<style lang="scss">
@import "@material/dialog/mdc-dialog.scss";
</style>
