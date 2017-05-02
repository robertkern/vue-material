# Material Design Components for Vue

`@robertkern/vue-material` is very much a work-in-progress implementation of the  [material-components-web](https://github.com/material-components/material-components-web) library as Vue components.

> Please don't expect this to work for you just yet :-)

```
import VueMdc from '@robertkern/vue-material'
import '@robertkern/vue-material.css'

Vue.use(VueMdc)
```

# Demo

To try out the demo, do the following:

```
$ cd vue-material
$ npm install -g lerna # Skip this if lerna is already installed
$ npm install
$ lerna bootstrap
$ cd demos/demo
$ npm run dev
```

Your default browser should open with a simple demo of the currently available components.

# Demos (ignore above for now)

Currently only using `demos/demo`. Getting the demo to work with the `@robertkern/vue-material` package as
a symlink wasn't fun. In the end I was able to get it working by renaming/deleting the `node_modules`
folder for the "package", so `./node_modules` renamed to something else or deleted.

I haven't checked with the `lerna bootstrap` command using the current config, but I know it
works using `npm link`. In the `./` folder run `npm link`, then from `/demos/demo` run `npm link @robertkern/vue-material`

# Docker
Build: `docker build -t robertkern/vue-material .`  
Run: `docker run -d --rm -p 8082:8080 robertkern/vue-material`  
Run and enter to bash: `docker run -it --rm --entrypoint bash -p 8080:8082 robertkern/vue-material`

# Dev
`./dev.sh`  
`cd ../../`  
`lerna bootstrap`
