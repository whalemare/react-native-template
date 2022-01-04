import { formatDuration, intervalToDuration } from 'date-fns'
import * as dateLocations from 'date-fns/locale'
import { makeAutoObservable } from 'mobx'
import { findBestAvailableLanguage, getLocales } from 'react-native-localize'

import { SingleSelectionStore } from '~/lib/mobx/SingleSelectionStore'
import { Period } from '~/lib/period/Period'
import { Initable } from '~/lib/typescript/Initable'
import { getKeys } from '~/lib/typescript/getKeys'

import { LanguageCode } from './model/LanguageCode'
import { formatString } from './model/formatString'
import { translations } from './model/translations'

export class LocaleStore implements Initable {
  private translationKeys = getKeys(translations)

  private languageSelection = new SingleSelectionStore(
    findBestAvailableLanguage(this.translationKeys)?.languageTag || this.translationKeys[0],
  )

  private get dateFnsLocale(): Locale {
    return dateLocations[localeToDateLocalization[this.languageCode]]
  }

  formatString = formatString

  formatDuration = (period: Period<Date>) => {
    return formatDuration(intervalToDuration(period), {
      locale: this.dateFnsLocale,
    })
  }

  onSelectLanguage = (code: LanguageCode) => {
    this.languageSelection.setSelected(code)
  }

  get strings() {
    return translations[this.languageSelection.selected]()
  }

  get languageCode(): LanguageCode {
    return this.languageSelection.selected
  }

  /**
   * Used for sending to backend
   * ru_RU, ru_US
   */
  get languageCodeIso(): string {
    return (
      getLocales()
        .find(it => it.languageTag.includes(this.languageSelection.selected))
        ?.languageTag?.replace('-', '_') || 'en_US'
    )
  }

  init = async () => {
    // TODO: retrive selected language from storage and apply it
  }

  constructor() {
    makeAutoObservable(this)
  }
}

type DateFnsLocale = keyof typeof dateLocations
const localeToDateLocalization: { [key in LanguageCode]: DateFnsLocale } = {
  ru: 'ru',
  en: 'enUS',
}
