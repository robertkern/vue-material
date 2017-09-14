<script>
export default {
  name: 'mdc-permanent-drawer',
  render (createElement) {
    let vm = this

    let data = {
      class: {
        'mdc-permanent-drawer': true,
        'mdc-typography': true
      }
    }

    return createElement('nav', data, vm.$slots.default)
  }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer.scss";
</style>
