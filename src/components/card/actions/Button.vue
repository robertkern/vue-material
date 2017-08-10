<script>
import ButtonMixin from '../../button/mixins/button'

export default {
  name: 'mdc-card-action-button',
  mixins: [
    ButtonMixin
  ],
  props: {
    compact: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    getAdditionalClasses () {
      return {
        'mdc-card__action': true
      }
    }
  }
}
</script>
