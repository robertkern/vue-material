<script>
export default {
  name: 'mdc-toolbar-title',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'span'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar__title': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
