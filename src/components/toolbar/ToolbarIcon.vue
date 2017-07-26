<script>
export default {
  name: 'mdc-toolbar-icon',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'a'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar__icon': true
      },
      on: this.$listeners
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
