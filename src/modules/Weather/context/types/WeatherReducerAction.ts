import ICurrentWeather from '../../types/ICurrentWeather'

type WeatherReducerAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: boolean }
  | {
      type: 'SET_CURRENT_WEATHER'
      payload: ICurrentWeather | null
    }
  | { type: 'REFRESH' }

export default WeatherReducerAction
