<script>
import { MDCTextfieldFoundation } from '@material/textfield'

export default {
  name: 'mdc-textfield-helptext',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'p'
    },
    persistent: {
      type: Boolean,
      required: false,
      default: false
    },
    validationMsg: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.persistent,
        'mdc-textfield-helptext--validation-msg': this.validationMsg
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
