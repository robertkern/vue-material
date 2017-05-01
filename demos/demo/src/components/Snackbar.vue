<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="4">

      <mdc-button @click="showSnackbar">Show snackbar</mdc-button>

      <mdc-snackbar ref="snackbar"></mdc-snackbar>

    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
  methods: {
    showSnackbar () {
      this.$refs.snackbar.show({
        message: 'Test',
        actionText: 'Foo',
        actionHandler: this.actionClicked
      })
    },
    actionClicked () {
      console.log('actionClicked')
    }
  }
}
</script>
