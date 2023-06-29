type SettingsReducerAction =
  | {
      type: 'SET_SIDEBAR_VISIBILITY'
      payload: boolean
    }
  | { type: 'ADD_SAVED_LOCATION'; payload: string }
  | { type: 'REMOVE_SAVED_LOCATION'; payload: string }
  | { type: 'UPDATE_SAVED_LOCATIONS'; payload: string[] }

export default SettingsReducerAction
