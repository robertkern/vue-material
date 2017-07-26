<script>
export default {
  name: 'mdc-toolbar-menuicon',
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
        'mdc-toolbar__icon--menu': true
      },
      on: this.$listeners
    }

    return createElement(this.tag, data, 'menu')
  }
}
</script>
