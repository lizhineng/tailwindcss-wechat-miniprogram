const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
const nameClass = require('./node_modules/tailwindcss/lib/util/nameClass').default

module.exports = plugin(function ({ addUtilities, theme, variants }) {
  const generators = [
    (_size, modifier) => {
      const size = _size === '0' ? '0px' : _size
      return {
        [`${nameClass('space-y', modifier)} > view + view`]: {
          '--tw-space-y-reverse': '0',
          'margin-top': `calc(${size} * calc(1 - var(--tw-space-y-reverse)))`,
          'margin-bottom': `calc(${size} * var(--tw-space-y-reverse))`,
        },
        [`${nameClass('space-x', modifier)} > view + view`]: {
          '--tw-space-x-reverse': '0',
          'margin-right': `calc(${size} * var(--tw-space-x-reverse))`,
          'margin-left': `calc(${size} * calc(1 - var(--tw-space-x-reverse)))`,
        },
      }
    },
  ]

  const utilities = _.flatMap(generators, (generator) => {
    return [
      ..._.flatMap(theme('space'), generator),
      {
        '.space-y-reverse > view + view': {
          '--tw-space-y-reverse': '1',
        },
        '.space-x-reverse > view + view': {
          '--tw-space-x-reverse': '1',
        },
      },
    ]
  })

  addUtilities(utilities, variants('space'))
})
