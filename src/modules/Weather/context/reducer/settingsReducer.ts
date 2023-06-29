import ISettingsState from '../types/ISettingsState'
import SettingsReducerAction from '../types/SettingsReducerAction'

const settingsReducer = (
  state: ISettingsState,
  action: SettingsReducerAction
) => {
  switch (action.type) {
    case 'SET_SIDEBAR_VISIBILITY':
      return { ...state, isSidebarOpen: action.payload }
    case 'ADD_SAVED_LOCATION':
      return {
        ...state,
        savedLocations: [...state.savedLocations, action.payload]
      }
    case 'REMOVE_SAVED_LOCATION':
      return {
        ...state,
        savedLocations: state.savedLocations.filter(
          (location) => location !== action.payload
        )
      }
    case 'UPDATE_SAVED_LOCATIONS':
      return { ...state, savedLocations: action.payload }
    default:
      throw new Error('The action type provided is invalid.')
  }
}

export default settingsReducer
