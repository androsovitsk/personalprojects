import useLocalStorage from '../../../../../ui/hooks/useLocalStorage'
import testSettings from '../../../fixtures/testSettings'
import fetchMock from 'fetch-mock'
import testAPIResponse from '../../../fixtures/testAPIResponse'
import { renderHook } from '@testing-library/react'
import useFetchCurrentWeather from './useFetchCurrentWeather'
import qs from 'querystringify'

jest.mock('../../../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

const url = 'https://api.openweathermap.org/data/2.5/weather'

describe('useFetchCurrentWeather', () => {
  beforeEach(() => {
    fetchMock.get(`begin:${url}`, testAPIResponse, { overwriteRoutes: true })

    useLocalStorageMock.mockReturnValue({
      getItem: () => testSettings
    })
  })

  it('should send a request to the correct endpoint', async () => {
    const { result } = renderHook(() =>
      useFetchCurrentWeather({
        setIsLoading: jest.fn(),
        setHasError: jest.fn(),
        setCurrentWeather: jest.fn()
      })
    )

    await result.current()
    expect(fetchMock.lastUrl()).toContain(url)
  })

  it('should not send a request if the should fetch prop equals to false', async () => {
    const { result } = renderHook(() =>
      useFetchCurrentWeather({
        setIsLoading: jest.fn(),
        setHasError: jest.fn(),
        setCurrentWeather: jest.fn()
      })
    )

    await result.current({}, false)
    expect(fetchMock.calls().length).toStrictEqual(0)
  })

  it('should send the saved settings as query parameters', async () => {
    const { result } = renderHook(() =>
      useFetchCurrentWeather({
        setIsLoading: jest.fn(),
        setHasError: jest.fn(),
        setCurrentWeather: jest.fn()
      })
    )

    const expectedQueryString = qs.stringify(
      {
        appid: testSettings.key,
        units: testSettings.temperatureUnit,
        lang: testSettings.language
      },
      true
    )

    await result.current()
    expect(fetchMock.lastUrl()).toStrictEqual(`${url}${expectedQueryString}`)
  })

  it('should send the provided query parameters', async () => {
    const testParameter = 'testValue'

    const { result } = renderHook(() =>
      useFetchCurrentWeather({
        setIsLoading: jest.fn(),
        setHasError: jest.fn(),
        setCurrentWeather: jest.fn()
      })
    )

    const expectedQueryString = qs.stringify(
      {
        appid: testSettings.key,
        units: testSettings.temperatureUnit,
        lang: testSettings.language,
        testParameter
      },
      true
    )

    await result.current({ testParameter })
    expect(fetchMock.lastUrl()).toStrictEqual(`${url}${expectedQueryString}`)
  })

  it('should call the provided callbacks', async () => {
    const setIsLoadingMock = jest.fn()
    const setHasErrorMock = jest.fn()
    const setCurrentWeatherMock = jest.fn()

    const { result } = renderHook(() =>
      useFetchCurrentWeather({
        setIsLoading: setIsLoadingMock,
        setHasError: setHasErrorMock,
        setCurrentWeather: setCurrentWeatherMock
      })
    )

    await result.current()

    expect(setIsLoadingMock).toHaveBeenCalled()
    expect(setHasErrorMock).toHaveBeenCalled()
    expect(setCurrentWeatherMock).toHaveBeenCalled()
  })
})
