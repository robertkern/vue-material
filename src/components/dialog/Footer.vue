<script>
export default {
  name: 'mdc-dialog-footer',
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
        'mdc-dialog__footer': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
