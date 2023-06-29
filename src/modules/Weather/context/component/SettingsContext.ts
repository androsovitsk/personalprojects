import React from 'react'
import ISettingsState from '../types/ISettingsState'
import SettingsReducerAction from '../types/SettingsReducerAction'

const SettingsContext = React.createContext({
  state: null as ISettingsState | null,
  dispatcher: null as React.Dispatch<SettingsReducerAction> | null
})

export default SettingsContext
