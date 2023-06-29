import useFetchCurrentWeather from '../../../../../hooks/useFetchCurrentWeather'
import useWeatherContext from '../../../../../../../hooks/useWeatherContext'
import { useEffect, useState } from 'react'
import useGeolocation from '../../../../../../../../../ui/hooks/useGeolocation'
import { isNil } from 'ramda'
import ICurrentWeather from '../../../../../../../types/ICurrentWeather'

const useGetGeolocationWeather = () => {
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

  const geolocation = useGeolocation()

  useEffect(() => {
    setIsLoading(geolocation.isLoading)
    setHasError(geolocation.hasError)
  }, [geolocation.isLoading, geolocation.hasError])

  useEffect(() => {
    fetchCurrentWeather(
      {
        lat: geolocation.location?.lat.toString(),
        lon: geolocation.location?.lon.toString()
      },
      !isNil(geolocation.location)
    )
  }, [fetchCurrentWeather, timestamp, geolocation.location])

  return { isLoading, hasError, currentWeather }
}

export default useGetGeolocationWeather
