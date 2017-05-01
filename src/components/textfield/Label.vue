<script>
export default {
  name: 'mdc-textfield-label',
  data () {
    return {
      classes: []
    }
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'label'
    },
    floatAbove: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-textfield__label': true,
        'mdc-textfield__label--float-above': vm.floatAbove,
        ...vm.classes
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
