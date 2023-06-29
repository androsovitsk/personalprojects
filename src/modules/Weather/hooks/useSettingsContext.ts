import { useContext } from 'react'
import SettingsContext from '../context/component/SettingsContext'
import ISettingsContext from '../context/types/ISettingsContext'

const useSettingsContext = () => useContext(SettingsContext) as ISettingsContext

export default useSettingsContext
