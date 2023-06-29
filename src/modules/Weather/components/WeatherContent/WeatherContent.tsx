import React from 'react'
import Grid from '../../../../ui/components/Grid/Grid'
import useWeatherContext from '../../hooks/useWeatherContext'
import useSettingsContext from '../../hooks/useSettingsContext'
import { CircularProgress } from '@mui/material'
import WeatherContentHeader from './components/WeatherContentHeader/WeatherContentHeader'
import InfoBox from '../../../../ui/components/InfoBox/InfoBox'
import AlertTypes from '../../../../ui/components/InfoBox/types/AlertTypes'
import WeatherContentDisplay from './components/WeatherContentDisplay/WeatherContentDisplay'
import { useTranslation } from 'react-i18next'

const WeatherContent: React.FC = () => {
  const {
    state: { isSidebarOpen }
  } = useSettingsContext()

  const {
    state: { isLoading, hasError, currentWeather }
  } = useWeatherContext()

  const { t } = useTranslation('weatherModule')

  return (
    <Grid
      container
      sx={{
        padding: (theme) => theme.spacing(2),
        width: (theme) =>
          isSidebarOpen ? `calc(100% - 360px - ${theme.spacing(4)})` : '100%',
        marginLeft: (theme) =>
          isSidebarOpen ? `calc(360px + ${theme.spacing(4)})` : 0,
        transition: (theme) =>
          theme.transitions.create('margin', {
            easing: isSidebarOpen
              ? theme.transitions.easing.easeOut
              : theme.transitions.easing.sharp,
            duration: isSidebarOpen
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen
          })
      }}
    >
      <WeatherContentHeader />
      {isLoading ? (
        <CircularProgress />
      ) : hasError ? (
        <InfoBox
          type={AlertTypes.ERROR}
          title={t('weatherContent.infoBoxes.fetchError.title')}
          text={t('weatherContent.infoBoxes.fetchError.text')}
        />
      ) : currentWeather ? (
        <WeatherContentDisplay />
      ) : (
        <InfoBox
          title={t('weatherContent.infoBoxes.noResult.title')}
          text={t('weatherContent.infoBoxes.noResult.text')}
        />
      )}
    </Grid>
  )
}

WeatherContent.displayName = 'WeatherContent'

export default WeatherContent
