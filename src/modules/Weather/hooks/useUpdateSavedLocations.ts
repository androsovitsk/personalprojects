import useSettingsContext from './useSettingsContext'
import { useEffect } from 'react'
import useLocalStorage from '../../../ui/hooks/useLocalStorage'
import updateSavedLocations from '../context/actions/settings/updateSavedLocations'

const useUpdateSavedLocations = () => {
  const { getItem, saveItem } = useLocalStorage('weatherApplication')

  const {
    state: { savedLocations },
    dispatcher
  } = useSettingsContext()

  useEffect(() => {
    const savedLocations = getItem('savedLocations')

    if (savedLocations) {
      dispatcher(updateSavedLocations(savedLocations))
    }
  }, [getItem, dispatcher])

  useEffect(() => {
    saveItem('savedLocations', savedLocations)
  }, [saveItem, savedLocations])
}

export default useUpdateSavedLocations
