import React, { useCallback } from 'react'
import ICurrentWeather from '../../../types/ICurrentWeather'
import useLocalStorage from '../../../../../ui/hooks/useLocalStorage'
import useFetchFromAPI from '../../../../../ui/hooks/useFetchFromAPI'
import convertCurrentWeatherAPIResponse from '../../../utilities/convertCurrentWeatherAPIResponse'
import IFetchOptions from '../../../../../ui/types/IFetchOptions'
import ICurrentWeatherAPIResponse from '../../../types/api/ICurrentWeatherAPIResponse'

interface IUseFetchCurrentWeatherProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<ICurrentWeather | null>
  >
}

const useFetchCurrentWeather = ({
  setIsLoading,
  setHasError,
  setCurrentWeather
}: IUseFetchCurrentWeatherProps) => {
  const { getItem } = useLocalStorage('weatherApplication')

  const weatherResource = useFetchFromAPI(
    'https://api.openweathermap.org/data/2.5/weather'
  )

  return useCallback(
    async (
      queryParameters: IFetchOptions['queryParameters'] = {},
      shouldFetchResource: boolean = true,
      shouldReset: boolean = false
    ) => {
      if (shouldFetchResource) {
        setIsLoading(true)
        setHasError(false)

        const savedSettings = getItem('settings')

        await weatherResource({
          queryParameters: {
            appid: savedSettings.key,
            units: savedSettings.temperatureUnit,
            lang: savedSettings.language,
            ...queryParameters
          }
        })
          .get()
          .json((response: ICurrentWeatherAPIResponse) => {
            const convertedResponse = convertCurrentWeatherAPIResponse(response)
            setCurrentWeather(convertedResponse)
          })
          .catch(() => {
            setHasError(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }

      if (shouldReset) {
        setIsLoading(false)
        setHasError(false)
        setCurrentWeather(null)
      }
    },
    [weatherResource, getItem, setIsLoading, setHasError, setCurrentWeather]
  )
}

export default useFetchCurrentWeather
