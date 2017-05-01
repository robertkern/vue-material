<script>
export default {
  name: 'mdc-card-title',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h1'
    },
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__title': true,
        'mdc-card__title--large': this.large
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
