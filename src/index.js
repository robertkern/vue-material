// Components
import * as MdcButton from './components/button'
import * as MdcCard from './components/card'
import * as MdcCheckbox from './components/checkbox'
import * as MdcDialog from './components/dialog'
import * as MdcDrawer from './components/drawer'
import * as MdcFormField from './components/form-field'
import * as MdcIconToggle from './components/icon-toggle'
import * as MdcLayoutGrid from './components/layout-grid'
import * as MdcList from './components/list'
import * as MdcMenu from './components/menu'
import * as MdcRadio from './components/radio'
import * as MdcSelect from './components/select'
import * as MdcSnackbar from './components/snackbar'
import * as MdcTabs from './components/tabs'
import * as MdcTextfield from './components/textfield'
import * as MdcToolbar from './components/toolbar'
import * as MdcTypography from './components/typography'

// Directives
import { MdcRipple } from './directives/ripple'

const components = [
  MdcButton,
  MdcCard,
  MdcCheckbox,
  MdcDialog,
  MdcDrawer,
  MdcFormField,
  MdcIconToggle,
  MdcLayoutGrid,
  MdcList,
  MdcMenu,
  MdcRadio,
  MdcSelect,
  MdcSnackbar,
  MdcTabs,
  MdcTextfield,
  MdcToolbar,
  MdcTypography
]

const directives = [
  MdcRipple
]

const install = function (Vue, options) {
  components.map(component => {
    if (component.hasOwnProperty('name')) {
      Vue.component(component.name, component)
    } else {
      Object.keys(component).map((key) => {
        Vue.component(component[key].name, component[key])
      })
    }
  })

  directives.map(directive => {
    Vue.directive(directive.name, directive)
  })
}

export default {
  install,
  MdcButton,
  MdcCard,
  MdcCheckbox,
  MdcDialog,
  MdcDrawer,
  MdcFormField,
  MdcIconToggle,
  MdcLayoutGrid,
  MdcList,
  MdcMenu,
  MdcRadio,
  MdcSelect,
  MdcSnackbar,
  MdcTextfield,
  MdcToolbar,
  MdcTypography
}
