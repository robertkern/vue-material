# Material Design Components for Vue

`@robertkern/vue-material` is very much a work-in-progress implementation of the  [material-components-web](https://github.com/material-components/material-components-web) library as Vue components.

> Please don't expect this to work for you just yet :-)

```
import VueMdc from '@robertkern/vue-material'
import '@robertkern/vue-material.css'

Vue.use(VueMdc)
```

I'm recommending using the `@material` sass files so you can customize the colors.
In your own sass file you'll need to import the `@material` styles like the following.
You can choose to import fewer if you're not planning to use all components.

```
# Define your theme colors:
$mdc-theme-primary: #651fff;
$mdc-theme-accent: #2962ff;

@import "@material/button/mdc-button.scss";
@import "@material/card/mdc-card.scss";
@import "@material/checkbox/mdc-checkbox.scss";
@import "@material/dialog/mdc-dialog.scss";
@import "@material/drawer/mdc-drawer.scss";
@import "@material/form-field/mdc-form-field.scss";
@import "@material/icon-toggle/mdc-icon-toggle.scss";
@import "@material/layout-grid/mdc-layout-grid.scss";
@import "@material/list/mdc-list.scss";
@import "@material/menu/mdc-menu.scss";
@import "@material/radio/mdc-radio.scss";
@import "@material/ripple/mdc-ripple.scss";
@import "@material/select/mdc-select.scss";
@import "@material/snackbar/mdc-snackbar.scss";
@import "@material/textfield/mdc-textfield.scss";
@import "@material/theme/mdc-theme.scss";
@import "@material/toolbar/mdc-toolbar.scss";
@import "@material/typography/mdc-typography.scss";
```

# Docker
Build: `docker build -t robertkern/vue-material .`  
Run: `docker run -d --rm -p 8082:8080 robertkern/vue-material`  
Run and enter to bash: `docker run -it --rm --entrypoint bash -p 8080:8082 robertkern/vue-material`

# Dev
`./dev.sh`  
`cd ../../`  
`npm run build:watch`
