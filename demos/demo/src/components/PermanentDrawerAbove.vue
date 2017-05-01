<template>
  <div class="demo-body">
    <mdc-permanent-drawer>
      <mdc-permanent-drawer-toolbar-spacer />
      <mdc-permanent-drawer-content>
        <mdc-permanent-drawer-nav>
          <mdc-permanent-drawer-nav-item selected>
            <mdc-list-item-start-detail class="material-icons">inbox</mdc-list-item-start-detail>
            Inbox
          </mdc-permanent-drawer-nav-item>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">star</mdc-list-item-start-detail>
            Star
          </mdc-permanent-drawer-nav-item>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">send</mdc-list-item-start-detail>
            Sent Mail
          </mdc-permanent-drawer-nav-item>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">drafts</mdc-list-item-start-detail>
            Drafts
          </mdc-permanent-drawer-nav-item>
        </mdc-permanent-drawer-nav>

        <mdc-list-divider />

        <mdc-permanent-drawer-nav>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">email</mdc-list-item-start-detail>
            All Mail
          </mdc-permanent-drawer-nav-item>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">delete</mdc-list-item-start-detail>
            Trash
          </mdc-permanent-drawer-nav-item>
          <mdc-permanent-drawer-nav-item>
            <mdc-list-item-start-detail class="material-icons">report</mdc-list-item-start-detail>
            Spam
          </mdc-permanent-drawer-nav-item>
        </mdc-permanent-drawer-nav>
      </mdc-permanent-drawer-content>
    </mdc-permanent-drawer>

    <div class="demo-content">
      <mdc-toolbar>
        <mdc-toolbar-row align="start">
          <mdc-toolbar-title>Title</mdc-toolbar-title>
        </mdc-toolbar-row>
      </mdc-toolbar>

      <main>
        <h1 class="mdc-typography--display1">Permanent Drawer (above)</h1>
        <p class="mdc-typography--body1">It sits to the left of this content.</p>
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.demo-body {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

.demo-content {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
}
</style>
