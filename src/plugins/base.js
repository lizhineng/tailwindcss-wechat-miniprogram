const fs = require('fs')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addBase, postcss }) {
    const styles = postcss.parse(fs.readFileSync(`${__dirname}/base.css`, 'utf-8'))

    addBase(styles.nodes)
  }
)
