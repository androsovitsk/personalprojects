import React from 'react'
import WeatherContentField from './components/WeatherContentField/WeatherContentField'
import useWeatherContext from '../../../../hooks/useWeatherContext'
import { useTranslation } from 'react-i18next'

const WeatherContentDisplay: React.FC = () => {
  const {
    state: { currentWeather }
  } = useWeatherContext()

  const { t } = useTranslation('weatherModule')

  return (
    <React.Fragment>
      <WeatherContentField
        label={t('weatherContent.fields.selectedCity')}
        text={currentWeather.displayName}
      />
      <WeatherContentField
        label={t('weatherContent.fields.description')}
        text={currentWeather.description}
      />
      <WeatherContentField
        label={t('weatherContent.fields.temperature')}
        text={`${currentWeather.currentTemperature}°`}
      />
      <WeatherContentField
        label={t('weatherContent.fields.highestTemperature')}
        text={`${currentWeather.highestTemperature}°`}
      />
      <WeatherContentField
        label={t('weatherContent.fields.lowestTemperature')}
        text={`${currentWeather.lowestTemperature}°`}
      />
      <WeatherContentField
        label={t('weatherContent.fields.feelsLikeTemperature')}
        text={`${currentWeather.feelsLikeTemperature}°`}
      />
      <WeatherContentField
        label={t('weatherContent.fields.humidity')}
        text={`${currentWeather.humidity}%`}
      />
      <WeatherContentField
        label={t('weatherContent.fields.pressure')}
        text={`${currentWeather.pressure} hPa`}
      />
    </React.Fragment>
  )
}

WeatherContentDisplay.displayName = 'WeatherContentDisplay'

export default WeatherContentDisplay
