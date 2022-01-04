import { useMemo } from 'react'
import { match } from 'ts-pattern'

import { Unitable } from '~/lib/unitable/Unitable'
import { Currency } from '~/lib/unitable/price/Currency'
import { formatPrice } from '~/lib/unitable/price/formatPrice'
import { TimeUnit } from '~/lib/unitable/time/TimeUnit'
import { useStores } from '~/module/root/hook/useStores'

import { LocaleStore } from '../LocaleStore'
import { infinityFallback } from '../model/infinityFallback'

import { formatTime } from './useFormatTime'

export function useFormatUnitable(unitable: Unitable) {
  const { localeStore } = useStores()
  return useMemo(() => {
    return formatUnitable(localeStore.strings, unitable)
  }, [localeStore, unitable])
}

export function formatUnitable(strings: LocaleStore['strings'], unitable: Unitable) {
  return match(unitable)
    .when(isOneOfTime, it => {
      return formatTime(strings.pluralTimes, it)
    })
    .when(isOneOfCurrency, formatPrice)
    .otherwise(() => {
      return `${infinityFallback(unitable.value)} ${unitable.unit}`
    })
}

function isOneOfTime(value: Unitable): value is Unitable<TimeUnit> {
  return Object.values(TimeUnit).includes(value.unit as never)
}

function isOneOfCurrency(value: Unitable): value is Unitable<Currency> {
  return Object.values(Currency).includes(value.unit as never)
}
