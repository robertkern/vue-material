<script>
export default {
  name: 'mdc-multiselect-divider',
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-list-divider': true
      },
      attrs: {
        role: 'presentation',
        disabled: true
      }
    }

    return createElement('option', data, vm.$slots.default)
  }
}
</script>
