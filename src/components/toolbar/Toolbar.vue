<script>
export default {
  name: 'mdc-toolbar',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'header'
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar.scss";
</style>
