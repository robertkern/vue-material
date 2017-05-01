<template>
  <div>
    <mdc-toolbar>
      <mdc-toolbar-row align="start">
        <a class="material-icons drawer-opener" @click="$refs.drawer.open()">menu</a>
        <mdc-toolbar-title>Temporary Drawer</mdc-toolbar-title>
      </mdc-toolbar-row>
    </mdc-toolbar>

    <mdc-temporary-drawer ref="drawer">
      <mdc-temporary-drawer-header slot="header" class="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
        Heading
      </mdc-temporary-drawer-header>

      <mdc-temporary-drawer-content>
        <mdc-temporary-drawer-nav>
          <mdc-temporary-drawer-nav-item selected href="/">
            <mdc-list-item-start-detail class="material-icons">inbox</mdc-list-item-start-detail>
            Inbox
          </mdc-temporary-drawer-nav-item>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">star</mdc-list-item-start-detail>
            Star
          </mdc-temporary-drawer-nav-item>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">send</mdc-list-item-start-detail>
            Sent Mail
          </mdc-temporary-drawer-nav-item>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">drafts</mdc-list-item-start-detail>
            Drafts
          </mdc-temporary-drawer-nav-item>
        </mdc-temporary-drawer-nav>

        <mdc-list-divider />

        <mdc-temporary-drawer-nav>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">email</mdc-list-item-start-detail>
            All Mail
          </mdc-temporary-drawer-nav-item>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">delete</mdc-list-item-start-detail>
            Trash
          </mdc-temporary-drawer-nav-item>
          <mdc-temporary-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">report</mdc-list-item-start-detail>
            Spam
          </mdc-temporary-drawer-nav-item>
        </mdc-temporary-drawer-nav>
      </mdc-temporary-drawer-content>
    </mdc-temporary-drawer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.drawer-opener {
  margin-right: 16px;
}
</style>
