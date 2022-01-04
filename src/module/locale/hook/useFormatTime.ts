import { Plural } from '~/lib/plural/Plural'
import { plurals } from '~/lib/plural/plurals'
import { Unitable } from '~/lib/unitable/Unitable'
import { TimeUnit } from '~/lib/unitable/time/TimeUnit'
import { useStores } from '~/module/root/hook/useStores'

import { infinityFallback } from '../model/infinityFallback'

export function useFormatTime(time: Unitable<TimeUnit>) {
  return formatTime(useStores().localeStore.strings.pluralTimes, time)
}

export function formatTime(times: Record<TimeUnit, Plural>, time: Unitable<TimeUnit>) {
  const pluralSource = times[time.unit]
  const pluralized = plurals(time.value, pluralSource)

  return `${infinityFallback(time.value)} ${pluralized}`
}
