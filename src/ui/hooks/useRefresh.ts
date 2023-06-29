import { useCallback, useState } from 'react'

/** Hook that returns a timestamp and a refresh function that updates the timestamp. */
const useRefresh = () => {
  const [timestamp, setTimestamp] = useState<number>(new Date().getTime())

  const refresh = useCallback(
    (timestamp: number = null) =>
      setTimestamp(timestamp ?? new Date().getTime()),
    []
  )

  return { timestamp, refresh }
}

export default useRefresh
