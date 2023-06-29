import SettingsReducerAction from '../../types/SettingsReducerAction'

const updateSavedLocations = (locations: string[]): SettingsReducerAction => ({
  type: 'UPDATE_SAVED_LOCATIONS',
  payload: locations
})

export default updateSavedLocations
