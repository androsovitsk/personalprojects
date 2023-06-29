import SettingsReducerAction from '../../types/SettingsReducerAction'

const setSidebarVisibility = (visible: boolean): SettingsReducerAction => ({
  type: 'SET_SIDEBAR_VISIBILITY',
  payload: visible
})

export default setSidebarVisibility
