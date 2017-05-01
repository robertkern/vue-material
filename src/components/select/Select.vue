<script>
import { MDCSelectFoundation } from '@material/select'

export default {
  name: 'mdc-select',
  data () {
    return {
      classes: {},
      attrs: {},
      selectedText: '',
      foundation: null
    }
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    tabindex: {
      type: [String, Number],
      required: false,
      default: 0
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCSelectFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      setAttr (attr, value) {
        vm.$set(vm.attrs, attr, value)
      },
      rmAttr (attr, value) {
        vm.$delete(vm.attrs, className)
      },
      computeBoundingRect () {
        return vm.$el.getBoundingClientRect()
      },
      registerInteractionHandler (type, handler) {
        vm.$el.addEventListener(type, handler)
      },
      deregisterInteractionHandler (type, handler) {
        vm.$el.removeEventListener(type, handler)
      },
      focus () {
        vm.$el.focus()
      },
      makeTabbable () {
        vm.tabIndex = 0
      },
      makeUntabbable () {
        vm.tabIndex = -1
      },
      getComputedStyleValue (prop) {
        return window.getComputedStyle(vm.$el).getPropertyValue(prop)
      },
      setStyle (propertyName, value) {
        vm.$el.style.setProperty(propertyName, value)
      },
      create2dRenderingContext () {
        return document.createElement('canvas').getContext('2d')
      },
      setMenuElStyle (propertyName, value) {
        vm.$refs.menu.$el.style.setProperty(propertyName, value)
      },
      setMenuElAttr (attr, value) {
        vm.$refs.menu.$el.setAttribute(attr, value)
      },
      rmMenuElAttr (attr) {
        vm.$refs.menu.$el.removeAttribute(attr)
      },
      getMenuElOffsetHeight () {
        return vm.$refs.menu.$el.offsetHeight
      },
      openMenu (focusIndex) {
        return vm.$refs.menu.open({ focusIndex })
      },
      isMenuOpen () {
        return vm.$refs.menu.isOpen
      },
      setSelectedTextContent (selectedTextContent) {
        vm.selectedText = selectedTextContent
      },
      getNumberOfOptions () {
        return vm.optionItemElements.length
      },
      getTextForOptionAtIndex (index) {
        return vm.optionItemElements[index].textContent
      },
      getValueForOptionAtIndex (index) {
        if (vm.optionItemElements[index].id) {
          return vm.optionItemElements[index].id
        } else if (vm.optionItemElements[index].value) {
          return vm.optionItemElements[index].value
        }

        return vm.optionItemElements[index].textContent
      },
      setAttrForOptionAtIndex (index, attr, value) {
        return vm.optionItemElements[index].setAttribute(attr, value)
      },
      rmAttrForOptionAtIndex (index, attr, value) {
        return vm.optionItemElements[index].removeAttribute(attr)
      },
      getOffsetTopForOptionAtIndex (index) {
        return vm.optionItemElements[index].offsetTop
      },
      registerMenuInteractionHandler (type, handler) {
        vm.$refs.menu.$el.addEventListener(type, handler)
      },
      deregisterMenuInteractionHandler (type, handler) {
        vm.$refs.menu.$el.removeEventListener(type, handler)
      },
      notifyChange () {
        vm.$emit('input', vm.foundation.getValue())
      },
      getWindowInnerHeight () {
        return window.innerHeight
      }
    })

    vm.foundation.init()

    // Check for initial selection
    if (vm.value.length > 0) {
      // Find the item index
      let index = vm.optionItemElements.findIndex(el => el.id === vm.value)

      if (index >= 0) {
        vm.foundation.setSelectedIndex(index)
      }
    }
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  computed: {
    optionListNode () {
      let optionListNode = this.$refs.menu.$children.filter((child) => {
        return child.$el.classList.contains('mdc-list')
      })

      return optionListNode[0]
    },
    optionItems () {
      return this.optionListNode.$children.filter((child) => {
        return child.$el.classList.contains('mdc-list-item') && child.role === 'option'
      })
    },
    optionItemElements () {
      return this.optionItems.map((vnode) => {
        return vnode.$el
      })
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-select': true,
        ...vm.classes
      },
      attrs: {
        role: 'listbox',
        tabindex: vm.tabindex,
        ...vm.attrs
      }
    }

    let selectedTextEl = createElement('span', {
      class: {
        'mdc-select__selected-text': true
      }
    }, vm.selectedText)

    let menuEl = createElement('mdc-simple-menu', {
      class: {
        'mdc-select__menu': true
      },
      props: {
        itemRole: 'option'
      },
      ref: 'menu'
    }, vm.$slots.default)

    return createElement(vm.tag, data, [selectedTextEl, menuEl])
  }
}

</script>

<style lang="scss">
@import "@material/select/mdc-select.scss";
</style>
