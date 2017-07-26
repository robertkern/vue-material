
<script>
import { MDCSimpleMenuFoundation } from '@material/menu'
import { getTransformPropertyName } from '@material/menu/util'
import { emitEvent } from '../../util'

export default {
  name: 'mdc-simple-menu',
  data () {
    return {
      classes: {
        'mdc-simple-menu': true
      },
      foundation: null,
      previousFocus: null
    }
  },
  props: {
    tabindex: {
      type: String,
      required: false,
      default: '-1'
    },
    startopen: {
      type: Boolean,
      required: false,
      default: false
    },
    itemRole: {
      type: String,
      required: false,
      default: 'menuitem'
    }
  },
  mounted () {
    let vm = this

    this.foundation = new MDCSimpleMenuFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      hasClass (className) {
        return Boolean(vm.classes[className])
      },
      hasNecessaryDom () {
        return Boolean(vm.$el)
      },
      getInnerDimensions () {
        return {
          width: vm.$refs.list.$el.offsetWidth,
          height: vm.$refs.list.$el.offsetHeight
        }
      },
      hasAnchor () {
        return vm.$el.parentElement && vm.$el.parentElement.classList.contains('mdc-menu-anchor')
      },
      getAnchorDimensions () {
        return vm.$el.parentElement.getBoundingClientRect()
      },
      getWindowDimensions () {
        return {width: window.innerWidth, height: window.innerHeight}
      },
      setScale (x, y) {
        vm.$el.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
      },
      setInnerScale (x, y) {
        vm.$refs.list.$el.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
      },
      getNumberOfItems () {
        return vm.menuItemElements.length
      },
      registerInteractionHandler (type, handler) {
        vm.$el.addEventListener(type, handler)
      },
      deregisterInteractionHandler (type, handler) {
        vm.$el.removeEventListener(type, handler)
      },
      registerDocumentClickHandler (handler) {
        document.addEventListener('click', handler)
      },
      deregisterDocumentClickHandler (handler) {
        document.removeEventListener('click', handler)
      },
      getYParamsForItemAtIndex (index) {
        const {offsetTop: top, offsetHeight: height} = vm.menuItemElements[index]

        return {
          top,
          height
        }
      },
      setTransitionDelayForItemAtIndex (index, value) {
        vm.menuItemElements[index].style.setProperty('transition-delay', value)
      },
      getIndexForEventTarget (target) {
        return vm.menuItemElements.indexOf(target)
      },
      notifySelected ({ index }) {
        const data = {
          item: vm.menuItemElements[index],
          index
        }

        vm.$emit('selected', data)
        emitEvent(vm.$el, 'MDCSimpleMenu:selected', data)
      },
      notifyCancel () {
        vm.$emit('cancel')
        emitEvent(vm.$el, 'MDCSimpleMenu:cancel')
      },
      saveFocus () {
        vm.previousFocus = document.activeElement
      },
      restoreFocus () {
        if (vm.previousFocus) {
          vm.previousFocus.focus()
        }
      },
      isFocused () {
        return vm.previousFocus === vm.$el
      },
      focus () {
        vm.$el.focus()
      },
      getFocusedItemIndex () {
        return vm.menuItemElements.indexOf(document.activeElement)
      },
      focusItemAtIndex (index) {
        vm.menuItemElements[index].focus()
      },
      isRtl () {
        return window.getComputedStyle(vm.$el).getPropertyValue('direction') === 'rtl'
      },
      setTransformOrigin (value) {
        vm.$el.style[`${getTransformPropertyName(window)}-origin`] = value
      },
      setPosition (position) {
        vm.$el.style.left = 'left' in position ? position.left : null
        vm.$el.style.right = 'right' in position ? position.right : null
        vm.$el.style.top = 'top' in position ? position.top : null
        vm.$el.style.bottom = 'bottom' in position ? position.bottom : null
      },
      getAccurateTime () {
        return window.performance.now()
      }
    })

    this.foundation.init()
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  methods: {
    open (options) {
      this.foundation.open(options)
    },
    close () {
      this.foundation.close()
    }
  },
  computed: {
    isOpen () {
      return this.foundation.isOpen()
    },
    menuItems () {
      let vm = this

      return vm.$refs.list.$children.filter((child) => {
        return child.$el.classList.contains('mdc-list-item') && child.role === vm.itemRole
      })
    },
    menuItemElements () {
      return this.menuItems.map((vnode) => {
        return vnode.$el
      })
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-simple-menu--open': vm.startopen,
        'mdc-simple-menu--open-from-top-left': vm.openFrom === 'top-left',
        'mdc-simple-menu--open-from-top-right': vm.openFrom === 'top-right',
        'mdc-simple-menu--open-from-bottom-left': vm.openFrom === 'bottom-left',
        'mdc-simple-menu--open-from-bottom-right': vm.openFrom === 'bottom-right',
        ...vm.classes
      },
      attrs: {
        tabindex: vm.tabindex
      }
    }

    let listEl = createElement('mdc-list', {
      class: {
        'mdc-simple-menu__items': true
      },
      attrs: {
        role: 'menu',
        'aria-hidden': true
      },
      ref: 'list'
    }, vm.$slots.default)

    return createElement('div', data, [listEl])
  }
}
</script>

<style lang="scss">
@import "@material/menu/mdc-menu.scss";
</style>
