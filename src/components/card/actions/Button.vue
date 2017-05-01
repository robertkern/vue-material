<script>
export default {
  name: 'mdc-card-action-button',
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
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__action': true
      },
      props: {
        tag: this.tag,
        dense: this.dense,
        raised: this.raised,
        primary: this.primary,
        accent: this.accent,
        disabled: this.disabled,
        dark: this.dark,
        compact: true
      }
    }

    return createElement('mdc-button', data, this.$slots.default)
  }
}
</script>
