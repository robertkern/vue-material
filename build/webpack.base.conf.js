var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getDirectories(src) {
  return fs.readdirSync(src).filter((file) => {
    return fs.statSync(path.join(src, file)).isDirectory()
  })
}

var entry = {
  'vue-material': './src/index.js'
}

const componentsPath = 'src/components'
const components = getDirectories(resolve(componentsPath))

components.forEach((component) => {
  entry[path.join('components', component, 'index')] = ['./' + path.join(componentsPath, component)];
})

const directivesPath = 'src/directives'
const directives = getDirectories(resolve(directivesPath))

directives.forEach((directive) => {
  entry[path.join('directives', directive, 'index')] = ['./' + path.join(directivesPath, directive)];
})

module.exports = {
  entry: entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    library: 'VueMaterial',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/@material')]
      }
    ]
  }
}
