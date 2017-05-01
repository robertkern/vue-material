# VueJS Material Design Components

`vue-mdc` is a work-in-progress to add VueJS binding to the [material-components-web](https://github.com/material-components/material-components-web) library.

# Demo

To try out the simple demo, do the following:

```
$ cd vue-mdc
$ npm install -g lerna # Skip this if lerna is already installed
$ npm install
$ lerna bootstrap
$ cd demos/simple-demo
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
Build: `docker build -t robertkern/vue-mdc .`  
Run: `docker run -d --rm -p 8082:8080 robertkern/vue-mdc`  
Run and enter to bash: `docker run -it --rm --entrypoint bash -p 8080:8082 robertkern/vue-mdc`

# Dev
`./dev.sh`  
`cd ../../`  
`lerna bootstrap`
