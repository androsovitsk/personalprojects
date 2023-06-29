import WeatherReducerAction from '../../types/WeatherReducerAction'

const setLoading = (isLoading: boolean): WeatherReducerAction => ({
  type: 'SET_LOADING',
  payload: isLoading
})

export default setLoading
