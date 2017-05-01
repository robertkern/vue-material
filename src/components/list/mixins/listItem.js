
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'li'
    },
    dense: {
      type: [Boolean],
      required: false,
      default: false
    },
    twoLine: {
      type: [Boolean],
      required: false,
      default: false
    },
    role: {
      type: String,
      required: false
    },
    tabindex: {
      type: [String, Number],
      required: false
    }
  },
  methods: {
    getAdditionalClasses () {
      // Useful for extending the list e.g., drawer nav
      return {}
    },
    getAdditionalAttributes () {
      // Useful for extending the list e.g., drawer nav
      return {}
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-list-item': true,
        'mdc-list--dense': vm.dense,
        'mdc-list--two-line': vm.twoLine,
        ...vm.getAdditionalClasses()
      },
      attrs: {
        role: vm.role,
        tabindex: vm.tabindex,
        ...vm.getAdditionalAttributes()
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
