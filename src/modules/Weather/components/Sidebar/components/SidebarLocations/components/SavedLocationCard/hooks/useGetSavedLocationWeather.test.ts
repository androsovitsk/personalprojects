import useWeatherContext from '../../../../../../../hooks/useWeatherContext'
import useLocalStorage from '../../../../../../../../../ui/hooks/useLocalStorage'
import fetchMock from 'fetch-mock'
import testAPIResponse from '../../../../../../../fixtures/testAPIResponse'
import { act, renderHook } from '@testing-library/react'
import testSettings from '../../../../../../../fixtures/testSettings'
import useGetSavedLocationWeather from './useGetSavedLocationWeather'
import testCurrentWeather from '../../../../../../../fixtures/testCurrentWeather'
import qs from 'querystringify'

jest.mock('../../../../../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock

jest.mock('../../../../../../../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

const url = 'https://api.openweathermap.org/data/2.5/weather'
const testCityName = testCurrentWeather.cityName

describe('useGetSavedLocationWeather', () => {
  it('should fetch the endpoint', async () => {
    fetchMock.get(`begin:${url}`, testAPIResponse, { overwriteRoutes: true })

    useWeatherContextMock.mockReturnValue({
      state: { timestamp: new Date().getTime() }
    })

    useLocalStorageMock.mockReturnValue({
      getItem: () => testSettings
    })

    await act(() => renderHook(() => useGetSavedLocationWeather(testCityName)))

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
})
