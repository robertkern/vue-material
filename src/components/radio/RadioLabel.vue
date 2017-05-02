
<template>
<label class="mdc-radio-label" :for="labelFor" :id="id">{{label}}</label>
</template>

<script lang="babel">
export default {
  name: 'mdc-radio-label',
  props: ['id', 'label', 'for'],
  computed: {
    labelFor () {
      return this['for']
    }
  }
}
</script>
