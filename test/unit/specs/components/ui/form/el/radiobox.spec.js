import Vue from 'vue'
import radiobox from 'src/components/ui/form/el/radiobox'

describe('radiobox.vue', () => {
  it('should be created', () => {
    const vm = new Vue({
      template: '<radiobox name="foo" val="foo" v-model="selected"></radiobox>',
      data () {
        return {
          selected: 'foo'
        }
      },
      components: {
        radiobox
      }
    }).$mount()

    expect(vm.$el.classList.contains('radiobox')).toBe(true)
  })

  it('can be selected', () => {
    const vm = new Vue({
      template: '<div><radiobox name="foo" val="foo" v-model="selected"></radiobox><radiobox name="foo" val="bar" v-model="selected"></radiobox></div>',
      data () {
        return {
          selected: 'bar'
        }
      },
      components: {
        radiobox
      }
    }).$mount()

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('input:checked').value).toEqual('bar')
      done()
    })
  })
})
