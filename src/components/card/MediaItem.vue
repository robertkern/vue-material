<script>
export default {
  name: 'mdc-card-media-item',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'img'
    },
    '1dot5x': {
      type: Boolean,
      required: false,
      default: false
    },
    '2x': {
      type: Boolean,
      required: false,
      default: false
    },
    '3x': {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let data = {
      class: {
        'mdc-card__media-item': true,
        'mdc-card__media-item--1dot5x': this['1dot5x'],
        'mdc-card__media-item--2x': this['2x'],
        'mdc-card__media-item--3x': this['3x']
      }
    }

    return createElement(this.tag, data, this.$slots.default)
  }
}
</script>
