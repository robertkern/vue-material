<template>
  <mdc-layout-grid>
    <mdc-layout-grid-cell span="4">
      <mdc-text-title>Simple Menu</mdc-text-title>

      <mdc-menu-anchor>
        <mdc-button @click="$refs.menu.open()">Open</mdc-button>
        <mdc-simple-menu ref="menu">
          <mdc-menu-item>Back</mdc-menu-item>
          <mdc-menu-item>Forward</mdc-menu-item>
          <mdc-menu-item>Reload</mdc-menu-item>

          <mdc-list-divider />

          <mdc-menu-item>Save As...</mdc-menu-item>
          <mdc-menu-item>Print...</mdc-menu-item>
          <mdc-menu-item>Cast...</mdc-menu-item>
          <mdc-menu-item>Translate to English</mdc-menu-item>

          <mdc-list-divider />

          <mdc-menu-item>View Page Source</mdc-menu-item>
          <mdc-menu-item>Inspect</mdc-menu-item>
        </mdc-simple-menu>
      </mdc-menu-anchor>
    </mdc-layout-grid-cell>
  </mdc-layout-grid>
</template>

<script>
export default {
}
</script>
