import MdcRipple from '../../../directives/ripple'

export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'button'
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    raised: {
      type: Boolean,
      required: false,
      default: false
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    accent: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-button': true,
        'mdc-button--dense': vm.dense,
        'mdc-button--raised': vm.raised,
        'mdc-button--compact': vm.compact,
        'mdc-button--primary': vm.primary,
        'mdc-button--accent': vm.accent,
        'mdc-button--theme-dark': vm.dark
      },
      props: {
        disabled: vm.disabled
      },
      on: {
        click () {
          vm.$emit('click')
        }
      },
      directives: [
        {
          name: 'mdc-ripple'
        }
      ]
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
