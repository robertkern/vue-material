<script>
export default {
  name: 'mdc-textfield-input',
  data () {
    return {
      val: this.value
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
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

      this.val = newValue
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
      domProps: {
        value: vm.val
      },
      attrs: {
        type: vm.type,
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

    return createElement('input', data)
  }
}
</script>
