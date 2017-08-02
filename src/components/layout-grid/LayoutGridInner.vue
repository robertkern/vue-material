<script>
export default {
  name: 'mdc-layout-grid-inner',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-layout-grid__inner': true
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
</script>
