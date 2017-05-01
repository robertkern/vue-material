<script>
export default {
  name: 'mdc-card-horizontal-block',
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
        'mdc-card__horizontal-block': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
