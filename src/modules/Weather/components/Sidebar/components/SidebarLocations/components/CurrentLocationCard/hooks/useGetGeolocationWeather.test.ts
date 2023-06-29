import useGeolocation from '../../../../../../../../../ui/hooks/useGeolocation'
import { act, renderHook } from '@testing-library/react'
import useGetGeolocationWeather from './useGetGeolocationWeather'
import useWeatherContext from '../../../../../../../hooks/useWeatherContext'
import fetchMock from 'fetch-mock'
import testAPIResponse from '../../../../../../../fixtures/testAPIResponse'
import testSettings from '../../../../../../../fixtures/testSettings'
import qs from 'querystringify'
import useLocalStorage from '../../../../../../../../../ui/hooks/useLocalStorage'

jest.mock('../../../../../../../../../ui/hooks/useGeolocation')
const useGeolocationMock = useGeolocation as jest.Mock

jest.mock('../../../../../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock

jest.mock('../../../../../../../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

const url = 'https://api.openweathermap.org/data/2.5/weather'
const testGeolocation = { lat: 11.54321, lon: 12.12345 }

describe('useGetGeolocationWeather', () => {
  beforeEach(() => {
    fetchMock.get(`begin:${url}`, testAPIResponse, { overwriteRoutes: true })

    useWeatherContextMock.mockReturnValue({
      state: { timestamp: new Date().getTime() }
    })

    useLocalStorageMock.mockReturnValue({
      getItem: () => testSettings
    })
  })

  it('should set the loading state to true while geolocation is still loading', () => {
    useGeolocationMock.mockReturnValue({
      isLoading: true,
      hasError: false,
      location: null
    })

    const { result } = renderHook(() => useGetGeolocationWeather())
    expect(result.current.isLoading).toStrictEqual(true)
  })

  it('should set the error state to true when geolocation fetching resulted in an error', () => {
    useGeolocationMock.mockReturnValue({
      isLoading: false,
      hasError: true,
      location: null
    })

    const { result } = renderHook(() => useGetGeolocationWeather())
    expect(result.current.hasError).toStrictEqual(true)
  })

  it('should not fetch the endpoint when geolocation is not available', () => {
    useGeolocationMock.mockReturnValue({
      isLoading: false,
      hasError: false,
      location: null
    })

    renderHook(() => useGetGeolocationWeather())
    expect(fetchMock.calls().length).toStrictEqual(0)
  })

  it('should add the geolocation as query parameters to the endpoint and fetch it', async () => {
    useGeolocationMock.mockReturnValue({
      isLoading: false,
      hasError: false,
      location: testGeolocation
    })

    await act(() => renderHook(() => useGetGeolocationWeather()))

    const expectedQueryString = qs.stringify(
      {
        appid: testSettings.key,
        units: testSettings.temperatureUnit,
        lang: testSettings.language,
        lat: testGeolocation.lat,
        lon: testGeolocation.lon
      },
      true
    )

    expect(fetchMock.lastUrl()).toStrictEqual(`${url}${expectedQueryString}`)
  })
})
