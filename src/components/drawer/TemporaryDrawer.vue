<template>
  <aside class="mdc-temporary-drawer mdc-typography" :class="classes">
    <nav ref="drawer" class="mdc-temporary-drawer__drawer">
      <slot name="toolbar-spacer"></slot>
      <slot name="header"></slot>
      <slot></slot>
    </nav>
  </aside>
</template>

<script>
import { MDCTemporaryDrawerFoundation, util } from '@material/drawer'

const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = MDCTemporaryDrawerFoundation.strings

export default {
  name: 'mdc-temporary-drawer',
  props: ['toolbarSpacer'],
  data () {
    return {
      classes: {},
      changeHandlers: [],
      foundation: null
    };
  },
  mounted () {
    // const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = MDCTemporaryDrawerFoundation.strings

    let vm = this

    this.foundation = new MDCTemporaryDrawerFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true);
      },
      removeClass (className) {
        vm.$delete(vm.classes, className);
      },
      hasClass (className) {
        return Boolean(vm.classes[className]) || (vm.$el && vm.$el.classList.contains(className));
      },
      hasNecessaryDom () {
        return Boolean(vm.$refs.drawer);
      },
      registerInteractionHandler (evt, handler) {
        vm.$el.addEventListener(evt, handler);
      },
      deregisterInteractionHandler (evt, handler) {
        vm.$el.removeEventListener(evt, handler);
      },
      registerDrawerInteractionHandler (evt, handler) {
        vm.$refs.drawer.addEventListener(evt, handler);
      },
      deregisterDrawerInteractionHandler (evt, handler) {
        vm.$refs.drawer.removeEventListener(evt, handler);
      },
      registerTransitionEndHandler (handler) {
        vm.$refs.drawer.addEventListener('transitionend', handler);
      },
      deregisterTransitionEndHandler (handler) {
        vm.$refs.drawer.removeEventListener('transitionend', handler);
      },
      registerDocumentKeydownHandler (handler) {
        document.addEventListener('keydown', handler);
      },
      deregisterDocumentKeydownHandler (handler) {
        document.removeEventListener('keydown', handler);
      },
      getDrawerWidth () {
        return vm.$refs.drawer.clientWidth;
      },
      setTranslateX (value) {
        vm.$refs.drawer.style.setProperty(
          util.getTransformPropertyName(),
          value === null ? null : `translateX(${value}px)`
        );
      },
      updateCssVariable (value) {
        vm.$el.style.setProperty(OPACITY_VAR_NAME, value);
      },
      getFocusableElements () {
        return vm.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
      },
      saveElementTabState: (el) => util.saveElementTabState(el),
      restoreElementTabState: (el) => util.restoreElementTabState(el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      isRtl () {
        /* global getComputedStyle */
        return getComputedStyle(vm.$el).getPropertyValue('direction') === 'rtl';
      }
    })

    this.foundation.init()
  },
  beforeUnmount () {
    this.foundation.destroy()
  },
  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    }
  }
}

</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer.scss";
</style>
