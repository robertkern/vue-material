<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-subheading2',
  data () {
    return {
      type: 'subheading2',
      defaultTag: 'h3'
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
