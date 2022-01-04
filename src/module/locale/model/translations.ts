/* eslint-disable @typescript-eslint/no-var-requires */
import type ru from '../assets/ru'

type SourceLanguageType = typeof ru

// TODO: add async imports of language codes instead sync with no-typings
export const translations: {
  ru: () => SourceLanguageType
  en: () => SourceLanguageType
} = {
  ru: () => {
    return require('../assets/ru').default
  },
  en: () => {
    return require('../assets/en').default
  },
}
