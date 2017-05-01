<script>
export default {
  name: 'mdc-dialog-footer-button',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'button'
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    raised: {
      type: Boolean,
      required: false,
      default: false
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    accent: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    },
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
  render (createElement) {
    let data = {
      class: {
        'mdc-dialog__footer__button': true,
        'mdc-dialog__footer__button--cancel': this.cancel,
        'mdc-dialog__footer__button--accept': this.accept,
      },
      props: {
        tag: this.tag,
        dense: this.dense,
        raised: this.raised,
        compact: this.compact,
        primary: this.primary,
        accent: this.accent,
        disabled: this.disabled,
        dark: this.dark
      }
    }

    return createElement('mdc-button', data, this.$slots.default)
  }
}
</script>
