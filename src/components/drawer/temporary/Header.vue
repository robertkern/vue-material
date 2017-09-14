<script>
export default {
  name: 'mdc-temporary-drawer-header',
  render (createElement) {
    let vm = this

    let data = {
      class: {
        'mdc-temporary-drawer__header': true
      }
    }

    let headerContentEl = createElement('div', {
      class: {
        'mdc-temporary-drawer__header-content': true
      }
    }, vm.$slots.default)

    return createElement('header', data, [headerContentEl])
  }
}
</script>
