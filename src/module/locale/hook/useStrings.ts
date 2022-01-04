import { useStores } from '~/module/root/hook/useStores'

/**
 * Just proxy to localStore.strings from global store
 */
export function useStrings() {
  return useStores().localeStore.strings
}
