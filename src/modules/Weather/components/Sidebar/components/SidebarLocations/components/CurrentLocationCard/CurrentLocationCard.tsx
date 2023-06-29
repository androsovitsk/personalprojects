import React from 'react'
import useGetGeolocationWeather from './hooks/useGetGeolocationWeather'
import LocationCard from '../LocationCard/LocationCard'

const CurrentLocationCard: React.FC = () => {
  const { isLoading, hasError, currentWeather } = useGetGeolocationWeather()

  return (
    <LocationCard
      isLoading={isLoading}
      hasError={hasError}
      currentWeather={currentWeather}
    />
  )
}

CurrentLocationCard.displayName = 'CurrentLocationCard'

export default CurrentLocationCard
