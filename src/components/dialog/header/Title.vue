<script>
export default {
  name: 'mdc-dialog-header-title',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h2'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-dialog__header__title': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
