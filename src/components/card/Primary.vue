<script>
export default {
  name: 'mdc-card-primary',
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
        'mdc-card__primary': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
