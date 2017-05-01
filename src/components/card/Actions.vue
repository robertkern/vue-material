<script>
export default {
  name: 'mdc-card-actions',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'section'
    },
    vertical: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__actions': true,
        'mdc-card__actions--vertical': this.vertical
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
