<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="4">

      <mdc-textfield>
        <mdc-textfield-input :disabled="disabled" />
        <mdc-textfield-label>Testing</mdc-textfield-label>
      </mdc-textfield>
      <mdc-textfield-helptext>Help text</mdc-textfield-helptext>

      <mdc-textfield fullwidth>
        <mdc-textfield-input placeholder="Foo" :disabled="disabled" />
      </mdc-textfield>

      <mdc-textfield>
        <mdc-textfield-input :value="testDelayed" :disabled="disabled" />
        <mdc-textfield-label>Testing</mdc-textfield-label>
      </mdc-textfield>
      <mdc-textfield-helptext persistent>Help text persistent</mdc-textfield-helptext>

      <mdc-textfield>
        <mdc-textfield-input type="password" required pattern=".{8,}" :disabled="disabled" />
        <mdc-textfield-label>Choose password</mdc-textfield-label>
      </mdc-textfield>
      <mdc-textfield-helptext persistent validation-msg>Must be at least 8 characters long</mdc-textfield-helptext>

      <mdc-textfield>
        <mdc-textfield-area rows="8" cols="40" :disabled="disabled"></mdc-textfield-area>
        <mdc-textfield-label>Multi-line Label</mdc-textfield-label>
      </mdc-textfield>

      <mdc-button @click.native="toggleDisabled">Toggle disabled</mdc-button>
      {{disabled}}
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
  data () {
    return {
      disabled: false,
      testDelayed: ''
    }
  },
  mounted () {
    var vm = this

    setTimeout(() => {
      vm.testDelayed = 'Foo'
    }, 1000)
  },
  methods: {
    toggleDisabled () {
      console.log('toggleDisabled')
      this.disabled = (this.disabled === false)
    }
  }
}
</script>
