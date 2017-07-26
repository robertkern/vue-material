<script>
import { MDCToolbarFoundation, util } from '@material/toolbar'

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
  data () {
    return {
      classes: {},
      foundation: null
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCToolbarFoundation({
      hasClass (className) {
        return Boolean(vm.classes[className]) || (vm.$el && vm.$el.classList.contains(className))
      },
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerScrollHandler (handler) {
        vm.$el.addEventListener('scroll', handler, util.applyPassive())
      },
      deregisterScrollHandler (handler) {
        vm.$el.removeEventListener('scroll', handler, util.applyPassive())
      },
      registerResizeHandler (handler) {
        vm.$el.addEventListener('resize', handler, util.applyPassive())
      },
      deregisterResizeHandler (handler) {
        vm.$el.removeEventListener('resize', handler, util.applyPassive())
      },
      getViewportWidth () {
        return window.innerWidth
      },
      getViewportScrollY () {
        return window.pageYOffset
      },
      getOffsetHeight () {
        return vm.$refs.root.offsetHeight
      },
      getFirstRowElementOffsetHeight () {
        // vm.firstRowElement_.offsetHeight
      },
      notifyChange (evtData) {
        vm.$emit(MDCToolbarFoundation.strings.CHANGE_EVENT, evtData)
      },
      setStyle (property, value) {
        vm.$refs.root.style.setProperty(property, value)
      },
      setStyleForTitleElement (property, value) {
        // vm.titleElement_.style.setProperty(property, value)
      },
      setStyleForFlexibleRowElement (property, value) {
        // vm.firstRowElement_.style.setProperty(property, value)
      },
      setStyleForFixedAdjustElement (property, value) {
        if (vm.fixedAdjustElement) {
          vm.fixedAdjustElement.style.setProperty(property, value)
        }
      }
    })

    vm.foundation.init()
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed
      },
      ref: 'root'
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar.scss";
</style>
