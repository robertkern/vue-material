import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Button from 'components/Button'
import TemporaryDrawer from 'components/TemporaryDrawer'
import PermanentDrawerAbove from 'components/PermanentDrawerAbove'
import PermanentDrawerBelow from 'components/PermanentDrawerBelow'
import Checkboxes from 'components/Checkboxes'
import Toolbar from 'components/Toolbar'
import LayoutGrid from 'components/LayoutGrid'
import List from 'components/List'
import Typography from 'components/Typography'
import Card from 'components/Card'
import Textfield from 'components/Textfield'
import Dialog from 'components/Dialog'
import Snackbar from 'components/Snackbar'
import SimpleMenu from 'components/SimpleMenu'
import Select from 'components/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/drawer/temporary',
      name: 'TemporaryDrawer',
      component: TemporaryDrawer
    },
    {
      path: '/drawer/permanent',
      name: 'PermanentDrawerAbove',
      component: PermanentDrawerAbove
    },
    {
      path: '/drawer/permanent-below',
      name: 'PermanentDrawerBelow',
      component: PermanentDrawerBelow
    },
    {
      path: '/checkboxes',
      name: 'Checkboxes',
      component: Checkboxes
    },
    {
      path: '/toolbar',
      name: 'Toolbar',
      component: Toolbar
    },
    {
      path: '/layout-grid',
      name: 'LayoutGrid',
      component: LayoutGrid
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/textfield',
      name: 'Textfield',
      component: Textfield
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar
    },
    {
      path: '/simplemenu',
      name: 'SimpleMenu',
      component: SimpleMenu
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
