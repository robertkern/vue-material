<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-display1',
  data () {
    return {
      type: 'display1',
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
