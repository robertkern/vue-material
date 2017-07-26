<script>
import { MDCSnackbarFoundation } from '@material/snackbar'
import { getCorrectEventName } from '@material/animation'

export default {
  name: 'mdc-snackbar',
  data () {
    return {
      classes: {},
      message: '',
      actionText: '',
      hidden: false,
      actionHidden: false,
      // animHandlers: [],
      actionClickHandlers: [],
      foundation: null
    }
  },
  mounted () {
    let vm = this

    vm.foundation = new MDCSnackbarFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      setAriaHidden () {
        vm.hidden = true
      },
      unsetAriaHidden () {
        vm.hidden = false
      },
      setMessageText (message) {
        vm.message = message
      },
      setActionText (actionText) {
        vm.actionText = actionText
      },
      setActionAriaHidden () {
        vm.actionHidden = true
      },
      unsetActionAriaHidden () {
        vm.actionHidden = false
      },
      registerActionClickHandler (handler) {
        vm.actionClickHandlers.push(handler)
      },
      deregisterChangeHandler (handler) {
        let index = vm.actionClickHandlers.indexOf(handler)

        if (index >= 0) {
          console.log('index', index)
          vm.actionClickHandlers.splice(index, 1)
        }
      },
      registerTransitionEndHandler (handler) {
        if (vm.$refs.root) {
          vm.$refs.root.addEventListener(getCorrectEventName(window, 'transitionend'), handler)
        }
      },
      deregisterTransitionEndHandler (handler) {
        if (vm.$refs.root) {
          vm.$refs.root.removeEventListener(getCorrectEventName(window, 'transitionend'), handler)
        }
      }
    })

    vm.foundation.init()

    /*
    this.eventSource.$on(this.event, (data) => {
      this.foundation.show(data)
    });
    */
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  methods: {
    onClickAction (event) {
      this.actionClickHandlers.forEach((h) => h(event))
    },
    show (data) {
      console.log('show', data)
      this.foundation.show(data)
    }
  },
  render (createElement) {
    let vm = this
    let data = {
      class: {
        'mdc-snackbar': true,
        ...vm.classes
      },
      props: {
        'aria-live': 'assertive',
        'aria-atomic': true,
        'aria-hidden': vm.hidden
      },
      ref: 'root'
    }

    let textEl = createElement('div', {
      class: {
        'mdc-snackbar__text': true
      }
    }, vm.message)

    let actionButton = createElement('mdc-button', {
      class: {
        'mdc-snackbar__action-button': true
      },
      props: {
        'aria-hidden': vm.actionHidden
      },
      on: {
        click: vm.onClickAction
      }
    }, vm.actionText)

    let actionWrapperEl = createElement('div', {
      class: {
        'mdc-snackbar__action-wrapper': true
      }
    }, [actionButton])

    return createElement('div', data, [textEl, actionWrapperEl])
  }
}
</script>

<style lang="scss">
@import "@material/snackbar/mdc-snackbar.scss";
</style>
