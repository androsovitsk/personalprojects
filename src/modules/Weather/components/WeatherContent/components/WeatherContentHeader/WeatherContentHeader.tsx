import React from 'react'
import Grid from '../../../../../../ui/components/Grid/Grid'
import IconButton from '@mui/material/IconButton'
import { Menu } from '@mui/icons-material'
import Button from '@mui/material/Button'
import useSettingsContext from '../../../../hooks/useSettingsContext'
import setSidebarVisibility from '../../../../context/actions/settings/setSidebarVisibility'
import Text from '../../../../../../ui/components/Text/Text'
import useWeatherContext from '../../../../hooks/useWeatherContext'
import { useTranslation } from 'react-i18next'
import { isNil } from 'ramda'
import removeSavedLocation from '../../../../context/actions/settings/removeSavedLocation'
import addSavedLocation from '../../../../context/actions/settings/addSavedLocation'

const WeatherContentHeader: React.FC = () => {
  const {
    state: { isSidebarOpen, savedLocations },
    dispatcher
  } = useSettingsContext()

  const {
    state: { currentWeather }
  } = useWeatherContext()

  const { t } = useTranslation('weatherModule')

  return (
    <React.Fragment>
      <Grid xs={12} container justifyContent='space-between'>
        <Grid>
          <IconButton
            onClick={() => dispatcher(setSidebarVisibility(true))}
            sx={{ visibility: isSidebarOpen ? 'hidden' : 'visible' }}
          >
            <Menu />
          </IconButton>
        </Grid>
        <Grid>
          {!isNil(currentWeather) && (
            <Button
              variant={'contained'}
              onClick={() =>
                dispatcher(
                  savedLocations.includes(currentWeather.cityName)
                    ? removeSavedLocation(currentWeather.cityName)
                    : addSavedLocation(currentWeather.cityName)
                )
              }
            >
              {t(
                savedLocations.includes(currentWeather.cityName)
                  ? 'weatherContent.actions.removeLocation'
                  : 'weatherContent.actions.saveLocation'
              )}
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Text variant='h4'>{t('weatherContent.title')}</Text>
      </Grid>
    </React.Fragment>
  )
}

WeatherContentHeader.displayName = 'WeatherContentHeader'

export default WeatherContentHeader
