<script>
import { MDCLinearProgressFoundation } from '@material/linear-progress'

function validateStringNumber (value) {
  return ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'].indexOf(value.toString()) >= 0
}

export default {
  name: 'mdc-linear-progress',
  data () {
    return {
      classes: {},
      primaryStyles: {},
      bufferStyles: {},
      foundation: null
    }
  },
  props: {
    indeterminate: {
      type: Boolean,
      required: false,
      default: false
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    },
    accent: {
      type: Boolean,
      required: false,
      default: false
    },
    progress: {
      type: [Number, String],
      required: false,
      default: '0', // should be between 0 and 1
      validator: validateStringNumber
    },
    buffer: {
      type: [Number, String],
      required: false,
      default: '1', // should be between 0 and 1
      validator: validateStringNumber
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCLinearProgressFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      hasClass (className) {
        return Boolean(vm.classes[className]) || (vm.$el && vm.$el.classList.contains(className))
      },
      getPrimaryBar () {
        return vm.$refs.primary
      },
      getBuffer () {
        return vm.$refs.buffer
      },
      setStyle (el, styleProperty, value) {
        if (el.classList.contains('mdc-linear-progress__primary-bar')) {
          vm.$set(vm.primaryStyles, styleProperty, value)
        }
        if (el.classList.contains('mdc-linear-progress__buffer')) {
          vm.$set(vm.bufferStyles, styleProperty, value)
        }
      }
    })

    vm.foundation.init()

    vm.foundation.setProgress(vm.progress)
    vm.foundation.setBuffer(vm.buffer)
  },
  watch: {
    progress (newProgress) {
      this.foundation.setProgress(newProgress)
    },
    buffer (newBuffer) {
      this.foundation.setBuffer(newBuffer)
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-linear-progress': true,
        'mdc-linear-progress--indeterminate': vm.indeterminate,
        'mdc-linear-progress--reversed': vm.reversed,
        'mdc-linear-progress--accent': vm.accent,
        ...vm.classes
      },
      attrs: {
        role: 'progressbar'
      }
    }

    let bufferingDotsEl = createElement('div', {
      class: {
        'mdc-linear-progress__buffering-dots': true
      }
    })

    let bufferEl = createElement('div', {
      class: {
        'mdc-linear-progress__buffer': true
      },
      style: vm.bufferStyles,
      ref: 'buffer'
    })

    let primaryInnerEl = createElement('span', {
      class: {
        'mdc-linear-progress__bar-inner': true
      }
    })

    let primaryBarEl = createElement('div', {
      class: {
        'mdc-linear-progress__bar': true,
        'mdc-linear-progress__primary-bar': true
      },
      style: vm.primaryStyles,
      ref: 'primary'
    }, [primaryInnerEl])

    let secondaryInnerEl = createElement('span', {
      class: {
        'mdc-linear-progress__bar-inner': true
      }
    })

    let secondaryEl = createElement('div', {
      class: {
        'mdc-linear-progress__bar': true,
        'mdc-linear-progress__secondary-bar': true
      }
    }, [secondaryInnerEl])

    return createElement('div', data, [bufferingDotsEl, bufferEl, primaryBarEl, secondaryEl])
  }
}
</script>

<style lang="scss">
@import "@material/linear-progress/mdc-linear-progress.scss";
</style>
