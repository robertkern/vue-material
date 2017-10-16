<script>
import { MDCTabBarScrollerFoundation } from '@material/tabs'
import { getCorrectPropertyName } from '@material/animation'

export default {
  name: 'mdc-tabbar-scroller',
  data () {
    return {
      classes: {},
      backIndicatorClasses: {},
      forwardIndicatorClasses: {},
      indicatorStyles: {},
      foundation: null
    }
  },
  computed: {
    tabBar () {
      return this.getTabBar()
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCTabBarScrollerFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      eventTargetHasClass (target, className) {
        return target.classList.contains(className)
      },
      addClassToForwardIndicator (className) {
        vm.$set(vm.forwardIndicatorClasses, className, true)
      },
      removeClassFromForwardIndicator (className) {
        vm.$delete(vm.forwardIndicatorClasses, className)
      },
      addClassToBackIndicator (className) {
        vm.$set(vm.backIndicatorClasses, className, true)
      },
      removeClassFromBackIndicator (className) {
        vm.$delete(vm.backIndicatorClasses, className)
      },
      isRTL () {
        return getComputedStyle(vm.$refs.root).getPropertyValue('direction') === 'rtl'
      },
      registerBackIndicatorClickHandler (handler) {
        vm.$refs.backIndicator.addEventListener('click', handler)
      },
      deregisterBackIndicatorClickHandler (handler) {
        vm.$refs.backIndicator.removeEventListener('click', handler)
      },
      registerForwardIndicatorClickHandler (handler) {
        vm.$refs.forwardIndicator.addEventListener('click', handler)
      },
      deregisterForwardIndicatorClickHandler (handler) {
        vm.$refs.forwardIndicator.removeEventListener('click', handler)
      },
      registerCapturedInteractionHandler (evt, handler) {
        vm.$refs.root.addEventListener(evt, handler, true)
      },
      deregisterCapturedInteractionHandler (evt, handler) {
        vm.$refs.root.removeEventListener(evt, handler, true)
      },
      registerWindowResizeHandler (handler) {
        window.addEventListener('resize', handler)
      },
      deregisterWindowResizeHandler (handler) {
        window.removeEventListener('resize', handler)
      },
      getNumberOfTabs () {
        return vm.tabBar.tabs.length
      },
      getComputedWidthForTabAtIndex (index) {
        // Returns width of tab at given index.
        return vm.tabBar.tabs[index].computedWidth
      },
      getComputedLeftForTabAtIndex (index) {
        // Returns left offset of tab at given index.
        return vm.tabBar.tabs[index].computedLeft
      },
      getOffsetWidthForScrollFrame () {
        return vm.$refs.scrollFrame.offsetWidth
      },
      getScrollLeftForScrollFrame () {
        return vm.$refs.scrollFrame.scrollLeft
      },
      setScrollLeftForScrollFrame (scrollLeftAmount) {
        vm.$refs.scrollFrame.scrollLeft = scrollLeftAmount
      },
      getOffsetWidthForTabBar () {
        return vm.tabBar.$el.offsetWidth
      },
      setTransformStyleForTabBar (value) {
        vm.tabBar.$el.style.setProperty(getCorrectPropertyName(window, 'transform'), value)
      },
      getOffsetLeftForEventTarget (target) {
        return target.offsetLeft
      },
      getOffsetWidthForEventTarget (target) {
        return target.offsetWidth
      }
    })

    vm.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  },
  methods: {
    getTabBar () {
      return this.getChildWithClass(this, 'mdc-tab-bar')
    },
    getChildWithClass (vm, className) {
      let els = this.getChildrenWithClass(vm, className)

      return (els.length > 0) ? els[0] : null
    },
    getChildrenWithClass (vm, className) {
      if (vm.$children) {
        let els = Array.filter(vm.$children, (childVm) => {
          return childVm.$el.className.indexOf(className) >= 0
        })

        return els
      }

      return []
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-tab-bar-scroller': true,
        ...vm.classes
      },
      ref: 'root'
    }

    let indicatorBackButtonEl = createElement('a', {
      class: {
        'mdc-tab-bar-scroller__indicator__inner': true,
        'material-icons': true
      },
      attrs: {
        href: '#',
        'aria-label': 'scroll back button'
      }
    }, 'navigate_before')

    let indicatorForwardButtonEl = createElement('a', {
      class: {
        'mdc-tab-bar-scroller__indicator__inner': true,
        'material-icons': true
      },
      attrs: {
        href: '#',
        'aria-label': 'scroll forward button'
      }
    }, 'navigate_next')

    let indicatorBackEl = createElement('div', {
      class: {
        'mdc-tab-bar-scroller__indicator': true,
        'mdc-tab-bar-scroller__indicator--back': true,
        ...vm.backIndicatorClasses
      },
      ref: 'backIndicator'
    }, [indicatorBackButtonEl])

    let indicatorForwardEl = createElement('div', {
      class: {
        'mdc-tab-bar-scroller__indicator': true,
        'mdc-tab-bar-scroller__indicator--forward': true,
        ...vm.forwardIndicatorClasses
      },
      ref: 'forwardIndicator'
    }, [indicatorForwardButtonEl])

    let scrollFrameEl = createElement('div', {
      class: {
        'mdc-tab-bar-scroller__scroll-frame': true
      },
      ref: 'scrollFrame'
    }, [vm.$slots.default])

    return createElement('div', data, [indicatorBackEl, scrollFrameEl, indicatorForwardEl])
  }
}
</script>

<style lang="scss">
@import "@material/tabs/mdc-tabs.scss";
</style>
