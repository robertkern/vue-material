<script>
import { MDCTextfieldFoundation } from '@material/textfield'

export default {
  name: 'mdc-textfield',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    multiline: {
      type: Boolean,
      required: false,
      default: false
    },
    fullwidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      classes: [],
      inputFocusHandlers: [],
      inputBlurHandlers: [],
      inputHandlers: [],
      inputKeydownHandlers: [],
      foundation: null,
      disabled: false
    }
  },
  methods: {
    onSetInitialValue (value) {
      let vm = this

      if (value.toString().length > 0 && vm.hasLabel()) {
        // Value was probably loaded async and set with v-model
        vm.$set(vm.getLabel().classes, 'mdc-textfield__label--float-above', true)
      }
    },
    onInputFocus (event) {
      this.inputFocusHandlers.map((h) => h(event))
    },
    onInputBlur (event) {
      this.inputBlurHandlers.map((h) => h(event))
    },
    onInput (event) {
      this.inputHandlers.map((h) => h(event))
    },
    onInputKeydown (event) {
      this.inputKeydownHandlers.map((h) => h(event))
    },
    onToggleDisabled (disabled) {
      this.disabled = disabled
    },
    hasNativeInput () {
      return this.getNativeInput() !== null
    },
    getNativeInput () {
      return this.getChildWithClass('mdc-textfield__input')
    },
    hasTextArea () {
      return this.getChildWithTag('textarea') !== null
    },
    getTextArea () {
      return this.getChildWithTag('textarea')
    },
    hasLabel () {
      return this.getLabel() !== null
    },
    getLabel () {
      return this.getChildWithClass('mdc-textfield__label')
    },
    hasHelpText () {
      return this.getHelpText() !== null
    },
    getHelpText () {
      return this.getSiblingWithClass('mdc-textfield-helptext')
    },
    getChildWithClass (className) {
      if (this.$children) {
        let el = Array.filter(this.$children, (vm) => {
          return vm.$el.className.indexOf(className) >= 0
        })

        return (el.length > 0) ? el[0] : null
      }

      return null
    },
    getChildWithTag (tagName) {
      if (this.$children) {
        let el = Array.filter(this.$children, (vm) => {
          return vm.$el.nodeName.toLowerCase() === tagName.toLowerCase()
        })

        return (el.length > 0) ? el[0] : null
      }

      return null
    },
    getSiblingWithClass (className) {
      if (this.$el.nextElementSibling) {
        return (this.$el.nextElementSibling.className.indexOf(className) >= 0) ? this.$el.nextElementSibling : null
      }

      return null
    }
  },
  mounted () {
    let vm = this

    if (vm.hasTextArea()) {
      vm.$set(vm.classes, 'mdc-textfield--multiline', true)
    }
    if (vm.hasNativeInput() && vm.getNativeInput().disabled === true) {
      this.disabled = true
    }

    vm.$on('setInitialValue', this.onSetInitialValue)
    vm.$on('inputFocus', this.onInputFocus)
    vm.$on('inputBlur', this.onInputBlur)
    vm.$on('inputInput', this.onInput)
    vm.$on('inputKeydown', this.onInputKeydown)
    vm.$on('toggleDisabled', this.onToggleDisabled)

    this.foundation = new MDCTextfieldFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      addClassToLabel (className) {
        if (vm.hasLabel()) {
          vm.$set(vm.getLabel().classes, className, true)
        }
      },
      removeClassFromLabel (className) {
        if (vm.hasLabel()) {
          vm.$delete(vm.getLabel().classes, className)
        }
      },
      addClassToHelptext (className) {
        if (vm.hasHelpText()) {
          vm.getHelpText().classList.add(className)
        }
      },
      removeClassFromHelptext (className) {
        if (vm.hasHelpText()) {
          vm.getHelpText().classList.remove(className)
        }
      },
      helptextHasClass (className) {
        if (vm.hasHelpText()) {
          return vm.getHelpText().classList.contains(className)
        }

        return false
      },
      setHelptextAttr (name, value) {
        if (vm.hasHelpText()) {
          vm.getHelpText().setAttribute(name, value)
        }
      },
      removeHelptextAttr (name) {
        if (vm.hasHelpText()) {
          vm.getHelpText().removeAttribute(name)
        }
      },
      registerInputFocusHandler (handler) {
        vm.inputFocusHandlers.push(handler)
      },
      deregisterInputFocusHandler (handler) {
        let index = vm.inputFocusHandlers.indexOf(handler)

        if (index >= 0) {
          vm.inputFocusHandlers.splice(index, 1)
        }
      },
      registerInputBlurHandler (handler) {
        vm.inputBlurHandlers.push(handler)
      },
      deregisterInputBlurHandler (handler) {
        let index = vm.inputBlurHandlers.indexOf(handler)

        if (index >= 0) {
          vm.inputBlurHandlers.splice(index, 1)
        }
      },
      registerInputInputHandler (handler) {
        vm.inputHandlers.push(handler)
      },
      deregisterInputInputHandler (handler) {
        let index = vm.inputHandlers.indexOf(handler)

        if (index >= 0) {
          vm.inputHandlers.splice(index, 1)
        }
      },
      registerInputKeydownHandler (handler) {
        vm.inputKeydownHandlers.push(handler)
      },
      deregisterInputKeydownHandler (handler) {
        let index = vm.inputKeydownHandlers.indexOf(handler)

        if (index >= 0) {
          vm.inputKeydownHandlers.splice(index, 1)
        }
      },
      getNativeInput () {
        if (vm.hasNativeInput()) {
          return vm.getNativeInput().$el
        }

        return null
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
        'mdc-textfield': true,
        'mdc-textfield--multiline': vm.multiline,
        'mdc-textfield--fullwidth': vm.fullwidth,
        'mdc-textfield--upgraded': vm.upgraded,
        'mdc-textfield--disabled': vm.disabled,
        ...vm.classes
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-textfield.scss";
</style>
