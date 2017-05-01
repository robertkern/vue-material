<template>
  <div>
    <p>List of components here</p>
    <ul>
      <li><router-link to="/button">Button</router-link></li>
      <li><router-link to="/toolbar">Toolbar</router-link></li>
      <li><router-link to="/drawer/temporary">Temporary Drawer</router-link></li>
      <li><router-link to="/drawer/permanent">Permanent Drawer (above)</router-link></li>
      <li><router-link to="/drawer/permanent-below">Permanent Drawer (below)</router-link></li>
      <li><router-link to="/checkboxes">Checkboxes</router-link></li>
      <li><router-link to="/layout-grid">Layout grid</router-link></li>
      <li><router-link to="/list">List</router-link></li>
      <li><router-link to="/typography">Typography</router-link></li>
      <li><router-link to="/card">Card</router-link></li>
      <li><router-link to="/textfield">Textfield</router-link></li>
      <li><router-link to="/dialog">Dialog</router-link></li>
      <li><router-link to="/snackbar">Snackbar</router-link></li>
      <li><router-link to="/simplemenu">Simple menu</router-link></li>
      <li><router-link to="/select">Select</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
