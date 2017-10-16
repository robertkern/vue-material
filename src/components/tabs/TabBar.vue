<script>
import { MDCTabBarFoundation } from '@material/tabs'
import { emitEvent } from '../../util'

export default {
  name: 'mdc-tabbar',
  data () {
    return {
      classes: {},
      indicatorStyles: {},
      foundation: null
    }
  },
  computed: {
    tabs () {
      return this.getTabs()
    },
    activeTab: {
      get () {
        return this.tabs[this.foundation.getActiveTabIndex()]
      },
      set (tab) {
        this.setActiveTab(tab, false)
      }
    },
    activeTabIndex: {
      get () {
        return this.foundation.getActiveTabIndex()
      },
      set (index) {
        this.setActiveTabIndex(index, false)
      }
    }
  },
  mounted () {
    let vm = this

    // Check if this tab-bar is within a scroller
    if (vm.$parent.$el.classList.contains('mdc-tab-bar-scroller')) {
      vm.$set(vm.classes, 'mdc-tab-bar-scroller__scroll-frame__tabs', true)
    }

    vm.foundation = new MDCTabBarFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      bindOnMDCTabSelectedEvent () {
        // Adds MDCTab:selected event listener to root
        vm.$el.addEventListener('MDCTab:selected', vm.onTabSelected)
      },
      unbindOnMDCTabSelectedEvent () {
        // Removes MDCTab:selected event listener from root
        vm.$el.removeEventListener('MDCTab:selected', vm.onTabSelected)
      },
      registerResizeHandler (handler) {
        // Adds an event listener to the root element, for a resize event.
        vm.$el.addEventListener('resize', handler)
      },
      deregisterResizeHandler (handler) {
        // Removes an event listener from the root element, for a resize event.
        vm.$el.removeEventListener('resize', handler)
      },
      getOffsetWidth () {
        // Returns width of root element.
        return vm.$el.offsetWidth
      },
      setStyleForIndicator (propertyName, value) {
        // Sets style property for indicator
        vm.$set(vm.indicatorStyles, propertyName, value)
      },
      getOffsetWidthForIndicator () {
        // Returns width of indicator.
        return vm.$refs.indicator.offsetWidth
      },
      notifyChange (evtData) {
        // Emits MDCTabBar:change event, passes evtData.
        vm.$emit('change', evtData)
        emitEvent(vm.$el, 'MDCTabBar:change', evtData)
      },
      getNumberOfTabs () {
        // Returns number of tabs in MDC Tabs instance.
        return vm.tabs.length
      },
      getActiveTab () {
        return vm.activeTab
      },
      isTabActiveAtIndex (index) {
        // Returns true if tab at index is active.
        return vm.tabs[index].isActive
      },
      setTabActiveAtIndex (index, isActive) {
        // Sets tab active at given index.
        vm.tabs[index].isActive = isActive
      },
      isDefaultPreventedOnClickForTabAtIndex (index) {
        // Returns true if tab does not prevent default click action.
        return vm.tabs[index].preventDefaultOnClick
      },
      setPreventDefaultOnClickForTabAtIndex (index, preventDefaultOnClick) {
        // Sets preventDefaultOnClick for tab at given index
        vm.tabs[index].preventDefaultOnClick = preventDefaultOnClick
      },
      measureTabAtIndex (index) {
        // sets measurements (width, left offset) for tab at given index.
        return vm.tabs[index].measureSelf()
      },
      getComputedWidthForTabAtIndex (index) {
        // Returns width of tab at given index.
        return vm.tabs[index].computedWidth
      },
      getComputedLeftForTabAtIndex (index) {
        // Returns left offset of tab at given index.
        return vm.tabs[index].computedLeft
      }
    })

    vm.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  },
  methods: {
    getTabs () {
      return this.getChildrenWithClass(this, 'mdc-tab')
    },
    getTabAtIndex (index) {
      return this.tabs[index]
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
    },
    onTabSelected ({detail}) {
      const { tab } = detail
      this.setActiveTab(tab, true)
    },
    setActiveTabIndex (activeTabIndex, notifyChange) {
      this.foundation.switchToTabAtIndex(activeTabIndex, notifyChange)
    },
    setActiveTab (activeTab, notifyChange) {
      const indexOfTab = this.tabs.indexOf(activeTab)

      if (indexOfTab < 0) {
        throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list')
      }

      this.setActiveTabIndex(indexOfTab, notifyChange)
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-tab-bar': true,
        ...vm.classes
      }
    }

    let indicatorEl = createElement('span', {
      class: {
        'mdc-tab-bar__indicator': true
      },
      style: vm.indicatorStyles,
      ref: 'indicator'
    })

    return createElement('nav', data, [vm.$slots.default, indicatorEl])
  }
}
</script>

<style lang="scss">
@import "@material/tabs/mdc-tabs.scss";
</style>
