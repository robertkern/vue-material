<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-headline',
  data () {
    return {
      type: 'headline',
      defaultTag: 'h1'
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
