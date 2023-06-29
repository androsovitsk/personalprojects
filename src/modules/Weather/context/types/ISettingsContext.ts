import React from 'react'
import ISettingsState from './ISettingsState'
import SettingsReducerAction from './SettingsReducerAction'

interface ISettingsContext {
  state: ISettingsState
  dispatcher: React.Dispatch<SettingsReducerAction>
}

export default ISettingsContext
