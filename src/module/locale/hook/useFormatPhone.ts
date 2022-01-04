import type { PhoneDto } from '~/module/database/model/entity/PhoneDto'
import { useStores } from '~/module/root/hook/useStores'

import type { LocaleStore } from '../LocaleStore'
import { formatString } from '../model/formatString'

export function useFormatPhone(phone: PhoneDto) {
  return formatPhone(useStores().localeStore.strings, phone)
}

export function formatPhone(strings: LocaleStore['strings'], phone: PhoneDto) {
  const formattedPhone = phone.extNumber
    ? formatString(strings.formatNameExtNumber, phone.number, phone.extNumber)
    : phone.number

  return formattedPhone
}
