<script>
export default {
  name: 'mdc-permanent-drawer-toolbar-spacer',
  render (createElement) {
    let vm = this

    let data = {
      class: {
        'mdc-permanent-drawer__toolbar-spacer': true
      }
    }

    return createElement('div', data, vm.$slots.default)
  }
}
</script>
