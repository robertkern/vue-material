<script>
export default {
  name: 'mdc-card-supporting-text',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'section'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__supporting-text': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
