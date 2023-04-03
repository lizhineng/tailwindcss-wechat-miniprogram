import { KeyValuePair } from 'tailwindcss/types/config'

export function replaceModifier(pair: KeyValuePair<string, string>, search: string, replace: string) {
  return Object.fromEntries(
    Object.entries(pair).map(([ modifier, value ]) => ([
      modifier.replace(search, replace),
      value
    ]))
  )
}
