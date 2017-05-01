<script>
export default {
  name: 'mdc-card',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card': true,
        'mdc-card--theme-dark': this.dark
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card.scss";
</style>
