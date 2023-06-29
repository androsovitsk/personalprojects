import useWeatherContext from '../../../../../hooks/useWeatherContext'
import { useEffect } from 'react'
import setLoading from '../../../../../context/actions/weather/setLoading'
import setError from '../../../../../context/actions/weather/setError'
import setCurrentWeatherAction from '../../../../../context/actions/weather/setCurrentWeather'

const useSearchFieldActions = (isLoading, hasError, currentWeather) => {
  const { dispatcher } = useWeatherContext()

  useEffect(() => {
    dispatcher(setLoading(isLoading))
  }, [dispatcher, isLoading])

  useEffect(() => {
    dispatcher(setError(hasError))
  }, [dispatcher, hasError])

  useEffect(() => {
    dispatcher(setCurrentWeatherAction(currentWeather))
  }, [dispatcher, currentWeather])
}

export default useSearchFieldActions
