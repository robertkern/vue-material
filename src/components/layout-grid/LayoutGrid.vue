<script>
export default {
  name: 'mdc-layout-grid',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-layout-grid': true
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid.scss";
</style>
