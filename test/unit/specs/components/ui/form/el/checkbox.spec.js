import Vue from 'vue'
import checkbox from 'src/components/ui/form/el/checkbox'

describe('checkbox.vue', () => {
  it('should be created', () => {
    const vm = new Vue({
      template: '<checkbox v-model="checked"></checkbox>',
      data () {
        return {
          checked: false
        }
      },
      components: {
        checkbox
      }
    }).$mount()

    expect(vm.$el.classList.contains('checkbox')).toBe(true)
  })

  it('should have a label', () => {
    const vm = new Vue({
      template: '<checkbox v-model="checked">Test label</checkbox>',
      data () {
        return {
          checked: false
        }
      },
      components: {
        checkbox
      }
    }).$mount()

    expect(vm.$el.innerText).toEqual(' Test label')
  })

  it('can be checked initially', () => {
    const vm = new Vue({
      template: '<checkbox v-model="checked"></checkbox>',
      data () {
        return {
          checked: true
        }
      },
      components: {
        checkbox
      }
    }).$mount()

    expect(vm.$el.querySelector('input').checked).toBe(true)
  })

  it('can be checked by interaction', (done) => {
    const vm = new Vue({
      template: '<checkbox v-model="checked"></checkbox>',
      data () {
        return {
          checked: false
        }
      },
      components: {
        checkbox
      }
    }).$mount()

    expect(vm.$el.querySelector('input').checked).toBe(false)

    // Check checkbox
    vm.$el.querySelector('input').click()

    vm.$nextTick(() => {
      expect(vm.$el.querySelector('input').checked).toBe(true)
      done()
    })
  })

  it('can be checked by changing value', (done) => {
    const vm = new Vue({
      template: '<checkbox v-model="checked"></checkbox>',
      data () {
        return {
          checked: false
        }
      },
      components: {
        checkbox
      }
    }).$mount()

    expect(vm.$el.querySelector('input').checked).toBe(false)

    // Check checkbox
    vm.checked = true

    vm.$nextTick(() => {
      expect(vm.$el.querySelector('input').checked).toBe(true)
      done()
    })
  })
})
