import React from 'react'
import LocationCard from '../LocationCard/LocationCard'
import useGetSavedLocationWeather from './hooks/useGetSavedLocationWeather'

interface ISavedLocationCardProps {
  cityName: string
}

const SavedLocationCard: React.FC<ISavedLocationCardProps> = ({ cityName }) => {
  const { isLoading, hasError, currentWeather } =
    useGetSavedLocationWeather(cityName)

  return (
    <LocationCard
      isLoading={isLoading}
      hasError={hasError}
      currentWeather={currentWeather}
      cityName={cityName}
    />
  )
}

SavedLocationCard.displayName = 'SavedLocationCard'

export default SavedLocationCard
