<script>
export default {
  name: 'mdc-list-item-start-detail',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-list-item__start-detail': true
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
