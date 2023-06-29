interface ICurrentWeather {
  cityName: string
  country: string
  displayName: string
  description: string
  currentTemperature: number
  highestTemperature: number
  lowestTemperature: number
  feelsLikeTemperature: number
  humidity: number
  pressure: number
}

export default ICurrentWeather
