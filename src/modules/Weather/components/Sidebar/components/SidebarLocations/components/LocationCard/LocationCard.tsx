import React from 'react'
import LocationCardSkeleton from './components/LocationCardSkeleton/LocationCardSkeleton'
import LocationCardLayout from './components/LocationCardLayout/LocationCardLayout'
import LocationCardLoadingError from './components/LocationCardLoadingError/LocationCardLoadingError'
import { isNil } from 'ramda'
import ICurrentWeather from '../../../../../../types/ICurrentWeather'

interface ILocationCardProps {
  isLoading: boolean
  hasError: boolean
  currentWeather: ICurrentWeather | null
  cityName?: string
}

const LocationCard: React.FC<ILocationCardProps> = ({
  isLoading,
  hasError,
  currentWeather,
  cityName
}) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <LocationCardSkeleton />
      ) : hasError ? (
        <LocationCardLoadingError cityName={cityName} />
      ) : (
        !isNil(currentWeather) && (
          <LocationCardLayout
            currentWeather={currentWeather}
            isUserLocation={isNil(cityName)}
          />
        )
      )}
    </React.Fragment>
  )
}

LocationCard.displayName = 'LocationCard'

export default LocationCard
