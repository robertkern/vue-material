<script>
export default {
  name: 'mdc-dialog-header',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'header'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-dialog__header': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
