import SettingsReducerAction from '../../types/SettingsReducerAction'

const addSavedLocation = (location: string): SettingsReducerAction => ({
  type: 'ADD_SAVED_LOCATION',
  payload: location
})

export default addSavedLocation
