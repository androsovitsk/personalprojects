import WeatherReducerAction from '../../types/WeatherReducerAction'

const refreshWeather = (): WeatherReducerAction => ({
  type: 'REFRESH'
})

export default refreshWeather
