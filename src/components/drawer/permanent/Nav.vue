<script>
import ListMixin from '../../list/mixins/list'

export default {
  name: 'mdc-permanent-drawer-nav',
  mixins: [
    ListMixin
  ],
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list.scss";
</style>
