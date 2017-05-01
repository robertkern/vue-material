# Material Design Components for Vue

`vue-material-components` is very much a work-in-progress implementation of the  [material-components-web](https://github.com/material-components/material-components-web) library as Vue components.

> Please don't expect this to work for you just yet :-)

# Demo

To try out the demo, do the following:

```
$ cd vue-material-components
$ npm install -g lerna # Skip this if lerna is already installed
$ npm install
$ lerna bootstrap
$ cd demos/demo
$ npm run dev
```

Your default browser should open with a simple demo of the currently available components.

# Demos (ignore above for now)

Currently only using `demos/demo`. Getting the demo to work with the `vue-material-components` package as
a symlink wasn't fun. In the end I was able to get it working by renaming/deleting the `node_modules`
folder for the "package", so `./node_modules` renamed to something else or deleted.

I haven't checked with the `lerna bootstrap` command using the current config, but I know it
works using `npm link`. In the `./` folder run `npm link`, then from `/demos/demo` run `npm link vue-material-components`

# Docker
Build: `docker build -t robertkern/vue-material-components .`  
Run: `docker run -d --rm -p 8082:8080 robertkern/vue-material-components`  
Run and enter to bash: `docker run -it --rm --entrypoint bash -p 8080:8082 robertkern/vue-material-components`

# Dev
`./dev.sh`  
`cd ../../`  
`lerna bootstrap`
