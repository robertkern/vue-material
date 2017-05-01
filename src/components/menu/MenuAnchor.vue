<script>
export default {
  name: 'mdc-menu-anchor',
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
        'mdc-menu-anchor': true,
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
</script>
