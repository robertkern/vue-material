const textTypographyMixin = {
  props: {
    tag: {
      type: String,
      required: false
    },
    adjustMargin: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render (createElement) {
    let tag = this.tag || this.defaultTag

    let data = {
      class: {
        ['mdc-typography--' + this.type]: true,
        'mdc-typography--adjust-margin': this.adjustMargin
      }
    }

    return createElement(tag, data, this.$slots.default)
  }
}

export {
  textTypographyMixin
}
