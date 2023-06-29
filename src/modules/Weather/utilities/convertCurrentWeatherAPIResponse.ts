import ICurrentWeatherAPIResponse from '../types/api/ICurrentWeatherAPIResponse'
import ICurrentWeather from '../types/ICurrentWeather'

import firstLetterToUppercase from '../../../ui/utilities/firstLetterToUppercase'

const convertCurrentWeatherAPIResponse = (
  response: ICurrentWeatherAPIResponse
): ICurrentWeather => ({
  cityName: response.name,
  country: response.sys.country,
  displayName: `${response.name}, ${response.sys.country}`,
  description: firstLetterToUppercase(response.weather[0].description),
  currentTemperature: Math.floor(response.main.temp),
  highestTemperature: Math.floor(response.main.temp_max),
  lowestTemperature: Math.floor(response.main.temp_min),
  feelsLikeTemperature: Math.floor(response.main.feels_like),
  humidity: response.main.humidity,
  pressure: response.main.pressure
})

export default convertCurrentWeatherAPIResponse
