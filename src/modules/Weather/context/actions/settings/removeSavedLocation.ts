import SettingsReducerAction from '../../types/SettingsReducerAction'

const removeSavedLocation = (location: string): SettingsReducerAction => ({
  type: 'REMOVE_SAVED_LOCATION',
  payload: location
})

export default removeSavedLocation
