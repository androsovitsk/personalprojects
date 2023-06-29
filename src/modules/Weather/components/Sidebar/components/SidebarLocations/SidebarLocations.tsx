import React from 'react'
import { isEmpty } from 'ramda'
import useSettingsContext from '../../../../hooks/useSettingsContext'
import useUpdateSavedLocations from '../../../../hooks/useUpdateSavedLocations'
import CurrentLocationCard from './components/CurrentLocationCard/CurrentLocationCard'
import SavedLocationCard from './components/SavedLocationCard/SavedLocationCard'

const SidebarLocations: React.FC = () => {
  const {
    state: { savedLocations }
  } = useSettingsContext()

  useUpdateSavedLocations()

  return (
    <React.Fragment>
      <CurrentLocationCard />
      {!isEmpty(savedLocations) &&
        savedLocations.map((savedLocation) => (
          <SavedLocationCard key={savedLocation} cityName={savedLocation} />
        ))}
    </React.Fragment>
  )
}

SidebarLocations.displayName = 'SidebarLocations'

export default SidebarLocations
