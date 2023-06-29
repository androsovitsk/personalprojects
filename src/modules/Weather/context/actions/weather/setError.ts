import WeatherReducerAction from '../../types/WeatherReducerAction'

const setError = (hasError: boolean): WeatherReducerAction => ({
  type: 'SET_ERROR',
  payload: hasError
})

export default setError
