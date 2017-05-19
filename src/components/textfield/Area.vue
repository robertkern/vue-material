<script>
export default {
  name: 'mdc-textfield-area',
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (oldValue.length === 0) {
        this.$parent.$emit('setInitialValue', newValue)
      }
    },
    disabled (newValue) {
      this.$parent.$emit('toggleDisabled', newValue)
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-textfield__input': true
      },
      attrs: {
        disabled: vm.disabled
      },
      on: {
        focus (event) {
          vm.$parent.$emit('inputFocus', event)
          vm.$emit('focus', event)
        },
        blur (event) {
          vm.$parent.$emit('inputBlur', event)
          vm.$emit('blur', event)
        },
        input (event) {
          vm.$parent.$emit('inputInput', event)
          vm.$emit('input', event.target.value)
        },
        keydown (event) {
          vm.$parent.$emit('inputKeydown', event)
          vm.$emit('keydown', event)
        }
      }
    }

    return createElement('textarea', data, [vm.value, this.$slots.default])
  }
}
</script>
