<script>
export default {
  name: 'mdc-multiselect-option',
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-list-item': true
      }
    }

    return createElement('option', data, vm.$slots.default)
  }
}
</script>
