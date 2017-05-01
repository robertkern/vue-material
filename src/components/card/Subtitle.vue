<script>
export default {
  name: 'mdc-card-subtitle',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h2'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__subtitle': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
