import { useCallback, useEffect, useState } from 'react'
import useLocalStorage from '../../../../../ui/hooks/useLocalStorage'
import IAppSettingsDialogFormValues from '../types/IAppSettingsDialogFormValues'
import useOpenableComponent from '../../../../../ui/hooks/useOpenableComponent'
import useWeatherContext from '../../../hooks/useWeatherContext'
import { useTranslation } from 'react-i18next'
import refreshWeather from '../../../context/actions/weather/refreshWeather'

const useAppSettingsDialog = () => {
  const [savedSettings, setSavedSettings] =
    useState<IAppSettingsDialogFormValues>(null)

  const { isOpen, open, close } = useOpenableComponent(false)
  const { getItem, saveItem } = useLocalStorage('weatherApplication')
  const { dispatcher } = useWeatherContext()
  const { i18n } = useTranslation()

  const handleSubmit = useCallback(
    async (values: IAppSettingsDialogFormValues) => {
      await i18n.changeLanguage(values.language)

      saveItem('settings', values)
      setSavedSettings(values)

      dispatcher(refreshWeather())
      close()
    },
    [saveItem, close, dispatcher, i18n]
  )

  useEffect(() => {
    const settings = getItem('settings')

    if (!settings) {
      open()
    } else {
      setSavedSettings(settings)
    }
  }, [getItem, open])

  return { isOpen, savedSettings, open, close, handleSubmit }
}

export default useAppSettingsDialog
