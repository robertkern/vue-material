<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="4">
      <mdc-dialog ref="dialog1" @accept="setState('accept')" @cancel="setState('cancel')">
        <mdc-dialog-header>
          <mdc-dialog-header-title>Test</mdc-dialog-header-title>
        </mdc-dialog-header>
        <mdc-dialog-body>
          Testing
        </mdc-dialog-body>
        <mdc-dialog-footer>
          <mdc-dialog-footer-button cancel>Cancel</mdc-dialog-footer-button>
          <mdc-dialog-footer-button accept primary>Accept</mdc-dialog-footer-button>
        </mdc-dialog-footer>
      </mdc-dialog>

      <mdc-dialog ref="dialog2" @accept="setState('accept')" @cancel="setState('cancel')">
        <mdc-dialog-header>
          <mdc-dialog-header-title>Test</mdc-dialog-header-title>
        </mdc-dialog-header>
        <mdc-dialog-body scrollable>
          <mdc-list>
            <mdc-list-item>Item 1</mdc-list-item>
            <mdc-list-item>Item 2</mdc-list-item>
            <mdc-list-item>Item 3</mdc-list-item>
            <mdc-list-item>Item 4</mdc-list-item>
            <mdc-list-item>Item 5</mdc-list-item>
            <mdc-list-item>Item 6</mdc-list-item>
            <mdc-list-item>Item 7</mdc-list-item>
          </mdc-list>
        </mdc-dialog-body>
        <mdc-dialog-footer>
          <mdc-dialog-footer-button cancel>Cancel</mdc-dialog-footer-button>
          <mdc-dialog-footer-button accept primary>Accept</mdc-dialog-footer-button>
        </mdc-dialog-footer>
      </mdc-dialog>

      <mdc-button @click.native="openDialog" raised primary>Open dialog</mdc-button>
      <mdc-button @click.native="openScrollableDialog" raised primary>Open scrollable dialog</mdc-button>

      <pre>{{state}}</pre>
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
  data () {
    return {
      state: null
    }
  },
  methods: {
    openDialog () {
      console.log('openDialog')
      this.$refs.dialog1.open()
    },
    openScrollableDialog () {
      console.log('openScrollableDialog')
      this.$refs.dialog2.open()
    },
    setState (state) {
      this.state = state
    }
  }
}
</script>
