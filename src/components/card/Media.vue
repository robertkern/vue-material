<script>
export default {
  name: 'mdc-card-media',
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
        'mdc-card__media': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
