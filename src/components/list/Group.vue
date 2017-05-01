<template>
  <div class="mdc-list-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mdc-list-group',
  props: {
    dense: {
      type: [Boolean],
      required: false
    },
    twoLine: {
      type: [Boolean],
      required: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine
      }
    }
  }
}
</script>
