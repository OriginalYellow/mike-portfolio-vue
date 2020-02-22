// copied from https://github.com/vaso2/fullpage-nuxt/blob/master/lib/module.js

const { resolve } = require('path')

// eslint-disable-next-line require-await
module.exports = async function fullPageModule (moduleOptions) {
  const options = Object.assign({
    animate: false
  }, moduleOptions)

  this.options.css.unshift('fullpage-vue/src/fullpage.css')
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    options
  })
}
