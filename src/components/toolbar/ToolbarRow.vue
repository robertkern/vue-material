<script>
export default {
  name: 'mdc-toolbar-row',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar__row': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
