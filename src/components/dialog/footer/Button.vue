<script>
import ButtonMixin from '../../button/mixins/button'
import { MDCDialogFoundation } from '@material/dialog'

export default {
  name: 'mdc-dialog-footer-button',
  mixins: [
    ButtonMixin
  ],
  props: {
    cancel: {
      // Dialog footer cancel button
      type: Boolean,
      required: false,
      default: false
    },
    accept: {
      // Dialog footer accept button
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    getAdditionalClasses () {
      return {
        'mdc-dialog__footer__button': true,
        [MDCDialogFoundation.cssClasses.CANCEL_BTN]: this.cancel,
        [MDCDialogFoundation.cssClasses.ACCEPT_BTN]: this.accept
      }
    }
  }
}
</script>
