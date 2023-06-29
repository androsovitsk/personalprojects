import { useContext } from 'react'

import IWeatherContext from '../context/types/IWeatherContext'

import WeatherContext from '../context/component/WeatherContext'

const useWeatherContext = () => useContext(WeatherContext) as IWeatherContext

export default useWeatherContext
