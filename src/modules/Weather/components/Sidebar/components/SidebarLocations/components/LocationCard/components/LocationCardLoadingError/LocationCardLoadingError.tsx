import React from 'react'
import InfoBox from '../../../../../../../../../../ui/components/InfoBox/InfoBox'
import AlertTypes from '../../../../../../../../../../ui/components/InfoBox/types/AlertTypes'
import { useTranslation } from 'react-i18next'

interface ILocationCardLoadingErrorProps {
  cityName?: string
}

const LocationCardLoadingError: React.FC<ILocationCardLoadingErrorProps> = ({
  cityName
}) => {
  const { t } = useTranslation('weatherModule')

  return (
    <InfoBox
      type={AlertTypes.ERROR}
      title={cityName ?? t('sidebar.locationCard.yourLocation')}
      text={
        cityName
          ? t('sidebar.locationCard.infoBoxes.fetchError', { item: cityName })
          : t('sidebar.locationCard.infoBoxes.noGeolocation')
      }
    />
  )
}

LocationCardLoadingError.displayName = 'LocationCardLoadingError'

export default LocationCardLoadingError
