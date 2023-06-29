import React from 'react'
import IWeatherState from './IWeatherState'
import WeatherReducerAction from './WeatherReducerAction'

interface IWeatherContext {
  state: IWeatherState
  dispatcher: React.Dispatch<WeatherReducerAction>
}

export default IWeatherContext
