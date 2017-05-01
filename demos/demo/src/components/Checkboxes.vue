<template>
  <div>
    <mdc-form-field>
      <mdc-checkbox v-model="checked" label="Testing" id="my-check" label-id="my-check-label"></mdc-checkbox>
      <mdc-checkbox-label id="my-check-label" for="my-check" label="Testing 2"></mdc-checkbox-label>
    </mdc-form-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  }
}
</script>
