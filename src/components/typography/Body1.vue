<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-body1',
  data () {
    return {
      type: 'body1',
      defaultTag: 'p'
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
