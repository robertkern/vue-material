<script>
function validateStringNumber (value) {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].indexOf(value) >= 0
}

export default {
  name: 'mdc-layout-grid-cell',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    span: {
      type: String,
      required: false,
      default: '4',
      validator: validateStringNumber
    },
    tabletSpan: {
      type: String,
      required: false,
      validator: validateStringNumber
    },
    phoneSpan: {
      type: String,
      required: false,
      validator: validateStringNumber
    },
    order: {
      type: String,
      required: false,
      validator: validateStringNumber
    }
  },
  computed: {
    classes () {
      let classes = {}

      classes[`mdc-layout-grid__cell--span-${this.span}`] = true

      if (this.tabletSpan) {
        classes[`mdc-layout-grid__cell--span-${this.tabletSpan}-tablet`] = true
      }

      if (this.phoneSpan) {
        classes[`mdc-layout-grid__cell--span-${this.phoneSpan}-phone`] = true
      }

      if (this.order) {
        classes[`mdc-layout-grid__cell--order-${this.order}`] = true
      }

      return classes
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-layout-grid__cell': true,
        ...vm.classes
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
</script>
