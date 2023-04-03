import { readFileSync } from 'fs'
import plugin from 'tailwindcss/plugin'

export default plugin(
  function ({ addBase, postcss }) {
    const styles = postcss.parse(readFileSync(`${__dirname}/base.css`, 'utf-8'))

    addBase(styles.nodes)
  }
)
