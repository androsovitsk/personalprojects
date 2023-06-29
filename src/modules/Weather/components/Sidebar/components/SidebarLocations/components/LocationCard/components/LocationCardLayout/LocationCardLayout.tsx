import React from 'react'
import Grid from '../../../../../../../../../../ui/components/Grid/Grid'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Text from '../../../../../../../../../../ui/components/Text/Text'
import ICurrentWeather from '../../../../../../../../types/ICurrentWeather'
import useWeatherContext from '../../../../../../../../hooks/useWeatherContext'
import { useTranslation } from 'react-i18next'
import setCurrentWeather from '../../../../../../../../context/actions/weather/setCurrentWeather'
import Card from '@mui/material/Card'

interface ILocationCardLayoutProps {
  currentWeather: ICurrentWeather
  isUserLocation?: boolean
}

const LocationCardLayout: React.FC<ILocationCardLayoutProps> = ({
  currentWeather,
  isUserLocation = false
}) => {
  const { t } = useTranslation('weatherModule')
  const { dispatcher } = useWeatherContext()

  return (
    <Card variant='outlined'>
      <CardActionArea
        onClick={() => dispatcher(setCurrentWeather(currentWeather))}
      >
        <CardContent>
          <Grid container xs={12}>
            <Grid xs={8}>
              <Text variant='h6' noMargin>
                {currentWeather.displayName}
              </Text>
              <Text variant='subtitle1' noMargin>
                {isUserLocation
                  ? t('sidebar.locationCard.yourLocation')
                  : t('sidebar.locationCard.savedLocation')}
              </Text>
            </Grid>
            <Grid
              xs={4}
              display='flex'
              flexDirection='column'
              alignItems='flex-end'
            >
              <Text variant='h3' noMargin>
                {`${currentWeather.currentTemperature}°`}
              </Text>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={8}>
                <Text variant='subtitle2' noMargin>
                  {currentWeather.description}
                </Text>
              </Grid>
              <Grid
                xs={4}
                display='flex'
                flexDirection='column'
                alignItems='flex-end'
              >
                <Text variant='subtitle2' noMargin>
                  {`H: ${currentWeather.highestTemperature}°, L: ${currentWeather.lowestTemperature}°`}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

LocationCardLayout.displayName = 'LocationCardLayout'

export default LocationCardLayout
