import ICurrentWeather from '../../types/ICurrentWeather'

interface IWeatherState {
  isLoading: boolean
  hasError: boolean
  currentWeather: ICurrentWeather
  timestamp: number
}

export default IWeatherState
