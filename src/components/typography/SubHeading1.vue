<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-subheading1',
  data () {
    return {
      type: 'subheading1',
      defaultTag: 'h4'
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
