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
    },
    waterfall: {
      type: Boolean,
      required: false,
      default: false
    },
    fixedLastRowOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    flexible: {
      type: Boolean,
      required: false,
      default: false
    },
    flexibleDefaultBehavior: {
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
  computed: {
    firstRowElement () {
      return this.$el.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR)
    },
    titleElement () {
      return this.$el.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR)
    },
    fixedAdjustElement () {
      return this.getSiblingWithClass('mdc-toolbar-fixed-adjust')
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
        window.addEventListener('scroll', handler, util.applyPassive())
      },
      deregisterScrollHandler (handler) {
        window.removeEventListener('scroll', handler, util.applyPassive())
      },
      registerResizeHandler (handler) {
        window.addEventListener('resize', handler)
      },
      deregisterResizeHandler (handler) {
        window.removeEventListener('resize', handler)
      },
      getViewportWidth () {
        return window.innerWidth
      },
      getViewportScrollY () {
        return window.pageYOffset
      },
      getOffsetHeight () {
        return vm.$el.offsetHeight
      },
      getFirstRowElementOffsetHeight () {
        return vm.firstRowElement.offsetHeight
      },
      notifyChange (evtData) {
        vm.$emit(MDCToolbarFoundation.strings.CHANGE_EVENT, evtData)
      },
      setStyle (property, value) {
        vm.$el.style.setProperty(property, value)
      },
      setStyleForTitleElement (property, value) {
        vm.titleElement.style.setProperty(property, value)
      },
      setStyleForFlexibleRowElement (property, value) {
        vm.firstRowElement.style.setProperty(property, value)
      },
      setStyleForFixedAdjustElement (property, value) {
        if (vm.fixedAdjustElement) {
          vm.fixedAdjustElement.style.setProperty(property, value)
        }
      }
    })

    vm.foundation.init()
  },
  methods: {
    getSiblingWithClass (className) {
      if (this.$el.nextElementSibling) {
        return (this.$el.nextElementSibling.className.indexOf(className) >= 0) ? this.$el.nextElementSibling : null
      }

      return null
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed,
        'mdc-toolbar--waterfall': this.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.fixedLastRowOnly,
        'mdc-toolbar--flexible': this.flexible,
        'mdc-toolbar--flexible-default-behavior': this.flexibleDefaultBehavior,
        ...this.classes
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar.scss";
</style>
