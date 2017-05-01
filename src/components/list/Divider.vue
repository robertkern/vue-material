<template>
  <hr class="mdc-list-divider" :class="classes" />
</template>

<script>
export default {
  name: 'mdc-list-divider',
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
