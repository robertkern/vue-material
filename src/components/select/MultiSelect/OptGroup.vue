<script>
export default {
  name: 'mdc-multiselect-optgroup',
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-list-group': true
      }
    }

    return createElement('optgroup', data, vm.$slots.default)
  }
}
</script>
