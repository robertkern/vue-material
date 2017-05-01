<script>
export default {
  name: 'mdc-multiselect',
  props: {
    value: {
      type: Array,
      required: false,
      default: []
    },
    size: {
      type: [String, Number],
      required: false,
      default: 1
    }
  },
  watch: {
    value: 'updateSelectedOptions'
  },
  mounted () {
    this.updateSelectedOptions()
  },
  methods: {
    updateSelectedOptions () {
      let vm = this

      // Check for initial selection
      Array.map(vm.$el.options, (option) => {
        if (vm.value.indexOf(option.id) >= 0 || vm.value.indexOf(option.value) >= 0 || vm.value.indexOf(option.textContent) >= 0) {
          option.selected = true
        } else {
          option.selected = false
        }
      })
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-multi-select': true,
        'mdc-list': true
      },
      attrs: {
        multiple: true,
        size: vm.size
      },
      on: {
        change (event) {
          let selectedElements = Array.filter(vm.$el.options, option => option.selected === true)

          // Work out the selected values
          let selectedValues = selectedElements.map((option) => {
            if (option.id) {
              return option.id
            } else if (option.value) {
              return option.value
            }

            return option.textContent
          })

          vm.$emit('input', selectedValues)
        }
      }
    }

    return createElement('select', data, vm.$slots.default)
  }
}
</script>
