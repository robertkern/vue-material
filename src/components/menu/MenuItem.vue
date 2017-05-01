<script>
import ListItemMixin from '../list/mixins/listItem'

export default {
  name: 'mdc-menu-item',
  mixins: [
    ListItemMixin
  ],
  props: {
    role: {
      type: String,
      required: false,
      default: 'menuitem'
    },
    tabindex: {
      type: [String, Number],
      required: false,
      default: 0
    }
  }
}
</script>
