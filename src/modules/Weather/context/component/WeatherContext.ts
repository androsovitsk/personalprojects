import React from 'react'
import IWeatherState from '../types/IWeatherState'
import WeatherReducerAction from '../types/WeatherReducerAction'

const WeatherContext = React.createContext({
  state: null as IWeatherState | null,
  dispatcher: null as React.Dispatch<WeatherReducerAction>
})

export default WeatherContext
