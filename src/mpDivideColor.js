const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
const nameClass = require('./node_modules/tailwindcss/lib/util/nameClass').default
const flattenColorPalette = require('./node_modules/tailwindcss/lib/util/flattenColorPalette').default
const withAlphaVariable = require('./node_modules/tailwindcss/lib/util/withAlphaVariable').default
const toColorValue = require('./node_modules/tailwindcss/lib/util/toColorValue').default

const mpDivideColor = plugin.withOptions(function (options) {
  return function ({ addUtilities, theme, variants, corePlugins, config }) {
    const withOpacity = options ? (options.withOpacity ?? true) : true
    const colors = flattenColorPalette(theme('divideColor'))

    const getProperties = value => {
      if (withOpacity) {
        return withAlphaVariable({
          color: value,
          property: 'border-color',
          variable: '--tw-divide-opacity'
        })
      }

      return {
        'border-color': toColorValue(value)
      }
    }

    const utilities = _.fromPairs(_.map(_.omit(colors, 'DEFAULT'), (value, modifier) => {
      return [`${nameClass('divide', modifier)} > view + view`, getProperties(value)]
    }))

    addUtilities(utilities, variants('divideColor'))
  }
})

module.exports = mpDivideColor
