interface IWeatherData {
  /** WeatherModule condition id */
  id: number
  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string
  /** WeatherModule condition within the group */
  description: string
  /** WeatherModule icon id */
  icon: string
}

export default IWeatherData
