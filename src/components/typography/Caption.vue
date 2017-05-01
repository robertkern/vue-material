<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-caption',
  data () {
    return {
      type: 'caption',
      defaultTag: 'span'
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
