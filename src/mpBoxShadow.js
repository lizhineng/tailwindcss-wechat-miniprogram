const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
const nameClass = require('./node_modules/tailwindcss/lib/util/nameClass').default

module.exports = function ({
  addUtilities,
  theme,
  variants
}) {
  addUtilities({
    'page': {
      '--tw-shadow': '0 0 #0000'
    }
  }, {
    respectImportant: false
  })

  const utilities = _.fromPairs(_.map(theme('boxShadow'), (value, modifier) => {
    return [nameClass('shadow', modifier), {
      '--tw-shadow': value === 'none' ? '0 0 #0000' : value,
      'box-shadow': [`var(--tw-ring-offset-shadow, 0 0 #0000)`, `var(--tw-ring-shadow, 0 0 #0000)`, `var(--tw-shadow)`].join(', ')
    }]
  }))

  addUtilities(utilities, variants('boxShadow'))
}
