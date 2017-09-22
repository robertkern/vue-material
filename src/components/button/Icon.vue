<script>
export default {
  name: 'mdc-button-icon',
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  render (createElement) {
    let data = {
      class: {
        'material-icons': true,
        'mdc-button__icon': true
      },
      domProps: {
        innerHTML: this.icon
      }
    }

    return createElement('i', data, this.$slots.default)
  }
}
</script>
