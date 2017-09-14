<script>
export default {
  name: 'mdc-temporary-drawer-toolbar-spacer',
  render (createElement) {
    let vm = this

    let data = {
      class: {
        'mdc-temporary-drawer__toolbar-spacer': true
      }
    }

    return createElement('div', data, vm.$slots.default)
  }
}
</script>
