<template>
  <li role="separator" class="mdc-list-divider" :class="classes" />
</template>

<script>
export default {
  name: 'mdc-list-item-divider',
  props: {
    inset: {
      type: [Boolean],
      required: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list-divider--inset': this.inset
      }
    }
  }
}
</script>
