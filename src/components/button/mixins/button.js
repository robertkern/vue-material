import VueMaterialRipple from '../../../util/ripple'

export default {
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
    raised: {
      type: Boolean,
      required: false,
      default: false
    },
    unelevated: {
      type: Boolean,
      required: false,
      default: false
    },
    stroked: {
      type: Boolean,
      required: false,
      default: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: [String, Object], // "to" is not part of MDC spec, used for router-link type func
      required: false,
      default: ''
    },
    replace: {
      type: Boolean, // "replace" is not part of MDC spec, used for router-link type func
      required: false,
      default: false
    },
    append: {
      type: Boolean, // "append" is not part of MDC spec, used for router-link type func
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
  methods: {
    getAdditionalClasses () {
      // Useful for extending the list e.g., drawer nav
      return {}
    }
  },
  render (createElement) {
    let vm = this

    if (vm.to !== '' && vm.$router) {
      // Handle router links
      var router = vm.$router
      var current = vm.$route
      var { location, href } = router.resolve(vm.to, current, vm.append)
    }

    let data = {
      class: {
        'mdc-button': true,
        'mdc-button--raised': vm.raised,
        'mdc-button--unelevated': vm.unelevated,
        'mdc-button--stroked': vm.stroked,
        'mdc-button--dense': vm.dense,
        'mdc-button--compact': vm.compact,
        ...vm.classes,
        ...vm.getAdditionalClasses()
      },
      attrs: {
        disabled: vm.disabled
      },
      on: {
        ...vm.$listeners,
        click (e) {
          if (router && guardRouteClickEvent(e)) {
            if (vm.replace) {
              router.replace(location)
            } else {
              router.push(location)
            }
          }

          vm.$emit('click')
        }
      }
    }

    if (vm.tag === 'a' && href && href.length > 0) {
      // Set the href with the to route value
      data.attrs = {
        href,
        ...data.attrs
      }
    }

    return createElement(vm.tag, data, vm.$slots.default)
  }
}

// Lifted directly from https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
function guardRouteClickEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
  // don't redirect when preventDefault called
  if (e.defaultPrevented) return
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) return
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute('target')
    if (/\b_blank\b/i.test(target)) return
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault()
  }
  return true
}
