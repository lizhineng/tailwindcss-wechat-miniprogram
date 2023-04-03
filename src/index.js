import resolveConfig from 'tailwindcss/resolveConfig'
import { replaceModifier } from './utilities'

const defaultConfig = resolveConfig(require('tailwindcss/stubs/config.full'))

/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: '_',
  corePlugins: {
    preflight: false,
    container: false
  },
  theme: {
    // e.g., basis-1/4 -> basic-1-4
    flexBasis: replaceModifier(defaultConfig.theme.flexBasis, '/', '-'),

    // e.g., from-50% -> from-50
    gradientColorStopPositions: replaceModifier(
      defaultConfig.theme.gradientColorStopPositions, '%', ''
    ),

    // e.g., h-2/4 -> h-2-4
    height: replaceModifier(defaultConfig.theme.height, '/', '-'),

    // e.g., mt-2.5 -> mt-2p5
    spacing: replaceModifier(defaultConfig.theme.spacing, '.', 'p'),

    // e.g., translate-y-3/4 -> translate-y-3-4
    translate: replaceModifier(defaultConfig.theme.translate, '/', '-'),

    // e.g., w-6/12 -> w-6-12
    width: replaceModifier(defaultConfig.theme.width, '/', '-'),

    extend: {},
  },
  plugins: [
    require('./plugins/base')
  ],
  experimental: {
    optimizeUniversalDefaults: true
  }
}
