<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-display4',
  data () {
    return {
      type: 'display4',
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
