<script>
export default {
  name: 'mdc-temporary-drawer-nav'
}
</script>

<script>
import ListMixin from '../../list/mixins/list'

export default {
  name: 'mdc-temporary-drawer-nav',
  mixins: [
    ListMixin
  ],
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  methods: {
    getAdditionalClasses () {
      return {
        'mdc-temporary-drawer__content': true
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list.scss";
</style>
