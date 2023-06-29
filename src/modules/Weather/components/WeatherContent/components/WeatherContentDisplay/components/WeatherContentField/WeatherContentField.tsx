import React from 'react'
import Grid from '../../../../../../../../ui/components/Grid/Grid'
import ReadOnlyField from '../../../../../../../../ui/components/ReadOnlyField/ReadOnlyField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import useSettingsContext from '../../../../../../hooks/useSettingsContext'

export interface IWeatherContentFieldProps {
  label: string
  text: string
}

const WeatherContentField: React.FC<IWeatherContentFieldProps> = ({
  label,
  text
}) => {
  const {
    state: { isSidebarOpen }
  } = useSettingsContext()

  return (
    <Grid
      md={isSidebarOpen ? 6 : 3}
      lg={isSidebarOpen ? 3 : 2}
      sx={{ padding: (theme) => theme.spacing(1) }}
    >
      <Card variant={'outlined'}>
        <CardContent>
          <ReadOnlyField label={label} value={text} />
        </CardContent>
      </Card>
    </Grid>
  )
}

WeatherContentField.displayName = 'WeatherContentField'

export default WeatherContentField
