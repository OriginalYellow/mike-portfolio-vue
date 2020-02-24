/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Courier New', 'monospace'],
      body: ['IBM Plex Mono', 'Courier New', 'monospace']
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618'
    },
    textColor: {
      primary: '#131313'
    }
  },
  variants: {
    margin: ['responsive'],
    padding: ['responsive']
  },
  plugins: []
}
