interface IMainData {
  /** Temperature */
  temp: number
  /** Temperature parameter accounts for the human perception of weather */
  feels_like: number
  /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data) measured in hPa */
  pressure: number
  /** Humidity, measured in % */
  humidity: number
  /** Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas) */
  temp_min: number
  /** Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas) */
  temp_max: number
  /** Atmospheric pressure on the sea level, measured in hPa */
  sea_level: number
  /** Atmospheric pressure on the ground level, measured in hPa */
  grnd_level: number
}

export default IMainData
