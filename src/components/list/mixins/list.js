
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'ul'
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    twoLine: {
      type: Boolean,
      required: false,
      default: false
    },
    avatars: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    getAdditionalClasses () {
      // Useful for extending the list e.g., drawer nav
      return {}
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-list': true,
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatars,
        ...vm.getAdditionalClasses()
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
