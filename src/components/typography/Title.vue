<script>
import { textTypographyMixin } from './mixins'

export default {
  name: 'mdc-text-title',
  data () {
    return {
      type: 'title',
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
