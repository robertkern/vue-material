<script>
export default {
  name: 'mdc-dialog-body',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'section'
    },
    scrollable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-dialog__body': true,
        'mdc-dialog__body--scrollable': this.scrollable
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
