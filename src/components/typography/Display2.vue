<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-display2',
  data () {
    return {
      type: 'display2',
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
