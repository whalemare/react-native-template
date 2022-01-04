import { RootStore } from '../RootStore'

const rootStore = new RootStore()

export function useStores() {
  return rootStore
}
