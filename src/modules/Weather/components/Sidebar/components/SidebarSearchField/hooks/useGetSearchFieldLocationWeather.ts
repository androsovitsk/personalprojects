import useSearchFieldActions from './useSearchFieldActions'
import useWeatherContext from '../../../../../hooks/useWeatherContext'
import useFetchCurrentWeather from '../../../hooks/useFetchCurrentWeather'
import { useEffect, useState } from 'react'
import { isEmpty, isNil } from 'ramda'
import ICurrentWeather from '../../../../../types/ICurrentWeather'

const useGetSearchFieldLocationWeather = (cityName: string | null) => {
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
    fetchCurrentWeather(
      { q: cityName },
      !isNil(cityName) && !isEmpty(cityName),
      isEmpty(cityName)
    )
  }, [fetchCurrentWeather, timestamp, cityName])

  useSearchFieldActions(isLoading, hasError, currentWeather)
}

export default useGetSearchFieldLocationWeather
