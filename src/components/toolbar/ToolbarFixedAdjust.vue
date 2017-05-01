<script>
export default {
  name: 'mdc-toolbar-fixed-adjust',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'main'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar-fixed-adjust': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
