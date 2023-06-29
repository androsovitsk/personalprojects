import IWeatherData from './IWeatherData'
import IMainData from './IMainData'
import IWindData from './IWindData'
import IRainData from './IRainData'
import ISnowData from './ISnowData'
import ISystemData from './ISystemData'
import ILocation from '../../../../ui/types/ILocation'

interface ICurrentWeatherAPIResponse {
  /** City ID */
  id: number
  /** City name */
  name: string
  /** Internal parameter */
  base: string
  /** Internal parameter */
  cod: number
  /** Time of data calculation, unix, UTC */
  dt: number
  /** Shift in seconds from UTC */
  timezone: number
  /** Coordinate data */
  coord: ILocation
  /** WeatherModule data */
  weather: IWeatherData[]
  /** Main data */
  main: IMainData
  /** Visibility, measured in meter */
  visibility: number
  /** Wind data */
  wind: IWindData
  /** Cloud data */
  clouds: {
    /** Cloudiness, measured in % */
    all: number
  }
  /** Rain data */
  rain?: IRainData
  /** Snow data */
  snow?: ISnowData
  /** System data */
  sys: ISystemData
}

export default ICurrentWeatherAPIResponse
