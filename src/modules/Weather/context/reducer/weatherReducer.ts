import IWeatherState from '../types/IWeatherState'
import WeatherReducerAction from '../types/WeatherReducerAction'

const weatherReducer = (state: IWeatherState, action: WeatherReducerAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        hasError: false,
        currentWeather: null
      }
    case 'SET_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: action.payload,
        currentWeather: null
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        currentWeather: action.payload
      }
    case 'REFRESH':
      return { ...state, timestamp: new Date().getTime() }
    default:
      throw new Error('The action type provided is invalid.')
  }
}

export default weatherReducer
