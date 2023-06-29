import { useCallback } from 'react'

import { isNil, omit } from 'ramda'

const useLocalStorage = (storageKey: string) => {
  const getItem = useCallback(
    (key: string) => {
      const storageItem = localStorage.getItem(storageKey)

      return isNil(storageItem) ? null : JSON.parse(storageItem)[key]
    },
    [storageKey]
  )

  const saveItem = useCallback(
    (key: string, value: any) => {
      const storageItem = localStorage.getItem(storageKey)

      if (isNil(storageItem)) {
        localStorage.setItem(storageKey, JSON.stringify({ [key]: value }))
      } else {
        const existingValues = JSON.parse(storageItem)

        localStorage.setItem(
          storageKey,
          JSON.stringify({ ...existingValues, [key]: value })
        )
      }
    },
    [storageKey]
  )

  const clearItem = useCallback(
    (key: string) => {
      const storageItem = localStorage.getItem(storageKey)

      if (!isNil(storageItem)) {
        const existingValues = JSON.parse(storageItem)

        localStorage.setItem(
          storageKey,
          JSON.stringify(omit([key], existingValues))
        )
      }
    },
    [storageKey]
  )

  return { getItem, saveItem, clearItem }
}

export default useLocalStorage
