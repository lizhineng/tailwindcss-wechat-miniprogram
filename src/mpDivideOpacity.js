const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
const nameClass = require('./node_modules/tailwindcss/lib/util/nameClass').default

module.exports = plugin(function ({
  addUtilities,
  theme,
  variants
  }) {
  const utilities = _.fromPairs(_.map(theme('divideOpacity'), (value, modifier) => {
    return [`${nameClass('divide-opacity', modifier)} > view + view`, {
      '--tw-divide-opacity': value
    }]
  }))

  addUtilities(utilities, variants('divideOpacity'))
})
