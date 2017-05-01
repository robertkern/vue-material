<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-body2',
  data () {
    return {
      type: 'body2',
      defaultTag: 'aside'
    }
  },
  mixins: [
    textTypographyMixin
  ]
}
</script>

<style lang="scss">
@import "@material/typography/mdc-typography.scss";
</style>
