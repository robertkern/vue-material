<script>
import ListItemMixin from '../list/mixins/listItem'

export default {
  name: 'mdc-select-option',
  mixins: [
    ListItemMixin
  ],
  props: {
    role: {
      type: String,
      required: false,
      default: 'option'
    },
    tabindex: {
      type: [String, Number],
      required: false,
      default: 0
    }
  }
}
</script>
