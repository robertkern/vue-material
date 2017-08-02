<script>
import VueMaterialRipple from '../../util/ripple'

export default {
  name: 'mdc-fab',
  data () {
    return {
      classes: {}
    }
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'button'
    },
    mini: {
      type: Boolean,
      required: false,
      default: false
    },
    plain: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted () {
    let vm = this

    vm.ripple = new VueMaterialRipple(vm, {
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      }
    })

    vm.ripple.init()
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-fab': true,
        'material-icons': true,
        'mdc-fab--mini': vm.mini,
        'mdc-fab--plain': vm.plain,
        ...vm.classes
      },
      on: vm.$listeners
    }

    let spanEl = createElement('span', {
      class: {
        'mdc-fab__icon': true
      }
    }, vm.$slots.default)

    return createElement(vm.tag, data, [spanEl])
  }
}
</script>

<style lang="scss">
@import "@material/fab/mdc-fab.scss";
</style>
