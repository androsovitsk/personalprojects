import WeatherReducerAction from '../../types/WeatherReducerAction'
import ICurrentWeather from '../../../types/ICurrentWeather'

const setCurrentWeather = (
  currentWeather: ICurrentWeather | null
): WeatherReducerAction => ({
  type: 'SET_CURRENT_WEATHER',
  payload: currentWeather
})

export default setCurrentWeather
