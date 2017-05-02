<script>
import { MDCFormFieldFoundation } from '@material/form-field'

export default {
  name: 'mdc-form-field',
  data () {
    return {
      foundation: null
    }
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    align: {
      type: String,
      required: false,
      default: ''
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCFormFieldFoundation({
      registerInteractionHandler (type, handler) {
        // todo type
        // vm.interactionHandlers.push(handler)
      },
      deregisterInteractionHandler (type, handler) {
        /*
        let index = vm.interactionHandlers.indexOf(handler)

        if (index >= 0) {
          vm.interactionHandlers.splice(index, 1)
        }
        */
      },
      activateInputRipple () {
        // todo
      },
      deactivateInputRipple () {
        // todo
      }
    })
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.align === 'end'
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/form-field/mdc-form-field.scss";
</style>
