<template>
  <mdc-list-item tag="a" class="mdc-permanent-drawer__content" :class="classes">
    <slot></slot>
  </mdc-list-item>
</template>

<script>
export default {
  name: 'mdc-permanent-drawer-nav-item',
  props: {
    selected: {
      type: [Boolean],
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-permanent-drawer--selected': this.selected
      }
    }
  }
}
</script>
