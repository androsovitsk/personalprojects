import useWeatherContext from '../../../../../hooks/useWeatherContext'
import useLocalStorage from '../../../../../../../ui/hooks/useLocalStorage'
import testCurrentWeather from '../../../../../fixtures/testCurrentWeather'
import fetchMock from 'fetch-mock'
import testAPIResponse from '../../../../../fixtures/testAPIResponse'
import testSettings from '../../../../../fixtures/testSettings'
import { act, renderHook } from '@testing-library/react'
import useGetSearchFieldLocationWeather from './useGetSearchFieldLocationWeather'
import qs from 'querystringify'
import setLoading from '../../../../../context/actions/weather/setLoading'
import setError from '../../../../../context/actions/weather/setError'
import setCurrentWeather from '../../../../../context/actions/weather/setCurrentWeather'

jest.mock('../../../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock
const dispatcherMock = jest.fn()

jest.mock('../../../../../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

const url = 'https://api.openweathermap.org/data/2.5/weather'
const testCityName = testCurrentWeather.cityName

describe('useGetSearchFieldLocationWeather', () => {
  beforeEach(() => {
    fetchMock.get(`begin:${url}`, testAPIResponse, { overwriteRoutes: true })

    useWeatherContextMock.mockReturnValue({
      state: { timestamp: new Date().getTime() },
      dispatcher: dispatcherMock
    })

    useLocalStorageMock.mockReturnValue({
      getItem: () => testSettings
    })
  })

  it('should fetch the endpoint', async () => {
    await act(() =>
      renderHook(() => useGetSearchFieldLocationWeather(testCityName))
    )

    const expectedQueryString = qs.stringify(
      {
        appid: testSettings.key,
        units: testSettings.temperatureUnit,
        lang: testSettings.language,
        q: testCityName
      },
      true
    )

    expect(fetchMock.lastUrl()).toStrictEqual(`${url}${expectedQueryString}`)
  })

  it('should not fetch the endpoint when the city name is null', () => {
    renderHook(() => useGetSearchFieldLocationWeather(null))

    expect(fetchMock.calls().length).toStrictEqual(0)
  })

  it('should not fetch the endpoint and reset the state when the city name is an empty string', () => {
    renderHook(() => useGetSearchFieldLocationWeather(''))

    expect(fetchMock.calls().length).toStrictEqual(0)

    expect(dispatcherMock).toHaveBeenCalledWith(setLoading(false))
    expect(dispatcherMock).toHaveBeenCalledWith(setError(false))
    expect(dispatcherMock).toHaveBeenCalledWith(setCurrentWeather(null))
  })
})
