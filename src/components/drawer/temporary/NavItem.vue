<script>
import ListItemMixin from '../../list/mixins/listItem'

export default {
  name: 'mdc-temporary-drawer-nav-item',
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
        'mdc-temporary-drawer--selected': this.selected
      }
    }
  }
}
</script>
