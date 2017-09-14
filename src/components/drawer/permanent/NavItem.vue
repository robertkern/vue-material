<script>
import ListItemMixin from '../../list/mixins/listItem'

export default {
  name: 'mdc-permanent-drawer-nav-item',
  mixins: [
    ListItemMixin
  ],
  props: {
    tag: {
      type: String,
      required: false,
      default: 'a'
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    getAdditionalClasses () {
      return {
        'mdc-permanent-drawer--selected': this.selected
      }
    }
  }
}
</script>
