const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({
  addUtilities,
  variants
}) {
  addUtilities({
    '.divide-solid > view + view': {
      'border-style': 'solid'
    },
    '.divide-dashed > view + view': {
      'border-style': 'dashed'
    },
    '.divide-dotted > view + view': {
      'border-style': 'dotted'
    },
    '.divide-double > view + view': {
      'border-style': 'double'
    },
    '.divide-none > view + view': {
      'border-style': 'none'
    }
  }, variants('divideStyle'))
})
