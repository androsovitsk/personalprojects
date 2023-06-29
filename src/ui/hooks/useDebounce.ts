import { useEffect, useState } from 'react'

interface IUseDebounceProps<T> {
  value: T
  delay?: number
}

/** Hook that sets a state value after a provided delay. Defaults to 1000ms. */
const useDebounce = <T>({ value, delay = 1000 }: IUseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
