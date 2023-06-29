import { useEffect, useState } from 'react'
import useFetchCurrentWeather from '../../../../../hooks/useFetchCurrentWeather'
import useWeatherContext from '../../../../../../../hooks/useWeatherContext'
import ICurrentWeather from '../../../../../../../types/ICurrentWeather'

const useGetSavedLocationWeather = (cityName: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(
    null
  )

  const {
    state: { timestamp }
  } = useWeatherContext()

  const fetchCurrentWeather = useFetchCurrentWeather({
    setIsLoading,
    setHasError,
    setCurrentWeather
  })

  useEffect(() => {
    fetchCurrentWeather({ q: cityName })
  }, [fetchCurrentWeather, timestamp, cityName])

  return { isLoading, hasError, currentWeather }
}

export default useGetSavedLocationWeather
