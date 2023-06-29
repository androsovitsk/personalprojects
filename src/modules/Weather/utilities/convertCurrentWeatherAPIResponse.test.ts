import ICurrentWeatherAPIResponse from '../types/api/ICurrentWeatherAPIResponse'
import testCurrentWeather from '../fixtures/testCurrentWeather'
import convertCurrentWeatherAPIResponse from './convertCurrentWeatherAPIResponse'
import testAPIResponse from '../fixtures/testAPIResponse'

describe('convertCurrentWeatherAPIResponse', () => {
  it('should convert the API response to the correct format', () => {
    const result = convertCurrentWeatherAPIResponse(
      testAPIResponse as ICurrentWeatherAPIResponse
    )

    expect(result).toStrictEqual(testCurrentWeather)
  })
})
