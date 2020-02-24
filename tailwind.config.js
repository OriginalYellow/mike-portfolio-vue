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
      indigo: '#6A77C9',
      lightRed: '#FF6D55',
      lightGreen: '#A1CCA5'
    },
    textColor: {
      primary: '#1C0B19'
    }
  },
  variants: {
    margin: ['responsive'],
    padding: ['responsive']
  },
  plugins: []
}
