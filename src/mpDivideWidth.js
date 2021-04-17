const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
const nameClass = require('./node_modules/tailwindcss/lib/util/nameClass').default

module.exports = plugin(function ({ addUtilities, theme, variants }) {
  const generators = [(_size, modifier) => {
    const size = _size === '0' ? '0px' : _size
    return {
      [`${nameClass('divide-y', modifier)} > view + view`]: {
        '--tw-divide-y-reverse': '0',
        'border-top-width': `calc(${size} * calc(1 - var(--tw-divide-y-reverse)))`,
        'border-bottom-width': `calc(${size} * var(--tw-divide-y-reverse))`
      },
      [`${nameClass('divide-x', modifier)} > view + view`]: {
        '--tw-divide-x-reverse': '0',
        'border-right-width': `calc(${size} * var(--tw-divide-x-reverse))`,
        'border-left-width': `calc(${size} * calc(1 - var(--tw-divide-x-reverse)))`
      }
    }
  }]

  const utilities = _.flatMap(generators, generator => {
    return [..._.flatMap(theme('divideWidth'), (value, modifier) => {
      return generator(value, modifier)
    }), {
      '.divide-y-reverse > view + view': {
        '--tw-divide-y-reverse': '1'
      },
      '.divide-x-reverse > view + view': {
        '--tw-divide-x-reverse': '1'
      }
    }]
  });

  addUtilities(utilities, variants('divideWidth'))
})
