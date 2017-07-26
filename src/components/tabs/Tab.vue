<script>
import { MDCTabFoundation } from '@material/tabs'
import { emitEvent } from '../../util'
import VueMaterialRipple from '../../util/ripple'

export default {
  name: 'mdc-tab',
  data () {
    return {
      classes: {}
    }
  },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    computedWidth () {
      return this.foundation.getComputedWidth()
    },
    computedLeft () {
      return this.foundation.getComputedLeft()
    },
    isActive: {
      get () {
        return this.foundation.isActive()
      },
      set (isActive) {
        this.foundation.setActive(isActive)
      }
    },
    preventDefaultOnClick: {
      get () {
        return this.foundation.preventsDefaultOnClick()
      },
      set (preventsDefaultOnClick) {
        this.foundation.setPreventDefaultOnClick(preventsDefaultOnClick)
      }
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCTabFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerInteractionHandler (evt, handler) {
        // Adds an event listener to the root element, for the specified event name.
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler (evt, handler) {
        // Removes an event listener from the root element, for the specified event name.
        vm.$el.removeEventListener(evt, handler)
      },
      getOffsetWidth () {
        // Return the width of the tab
        return vm.$el.offsetWidth
      },
      getOffsetLeft () {
        // Return distance between left edge of tab and left edge of its parent element
        return vm.$el.offsetLeft
      },
      notifySelected () {
        // Broadcasts an event denoting that the user has actioned on the tab
        let data = {tab: vm}

        vm.$emit('selected', data)
        emitEvent(vm.$parent.$el, 'MDCTab:selected', data)
      }
    })

    vm.ripple = new VueMaterialRipple(vm, {
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      }
    })

    vm.foundation.init()
    vm.ripple.init()

    // Set initial active state
    vm.isActive = vm.active
  },
  beforeUnmount () {
    this.ripple.destroy()
    this.foundation.destroy()
  },
  methods: {
    measureSelf () {
      return this.foundation.measureSelf()
    }
  },
  render (createElement) {
    let vm = this

    let data = {
      class: {
        'mdc-tab': true,
        ...vm.classes
      }
    }

    return createElement('a', data, vm.$slots.default)
  }
}
</script>
