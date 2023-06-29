import { useEffect, useState } from 'react'
import LanguageTypes from '../components/TranslationProvider/types/LanguageTypes'
import IResourceBundle from '../components/TranslationProvider/types/IResourceBundle'
import commonResourceBundle from '../../locale/commonResourceBundle'
import useLocalStorage from './useLocalStorage'

/**
 * Hook that is useful for passing default values to a TranslationProvider instance.
 * Accepts a resource bundle that is added alongside the common resource bundle.
 * If it finds a saved language in the local storage (under settings > language)
 * it sets it to that, otherwise it defaults to english.
 * */
const useModuleTranslation = (
  moduleResourceBundle: IResourceBundle[],
  storageKey: string
) => {
  const [defaultLanguage, setDefaultLanguage] = useState<LanguageTypes>(
    LanguageTypes.ENGLISH
  )

  const [resourceBundles] = useState<IResourceBundle[]>([
    ...commonResourceBundle,
    ...moduleResourceBundle
  ])

  const { getItem } = useLocalStorage(storageKey)

  useEffect(() => {
    const settings = getItem('settings')

    if (settings?.language) {
      setDefaultLanguage(settings.language)
    }
  }, [moduleResourceBundle, getItem])

  return { defaultLanguage, resourceBundles }
}

export default useModuleTranslation
