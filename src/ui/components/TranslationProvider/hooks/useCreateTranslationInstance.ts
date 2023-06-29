import { useMemo } from 'react'
import IResourceBundle from '../types/IResourceBundle'
import LanguageTypes from '../types/LanguageTypes'
import i18n from 'i18next'

const useCreateTranslationInstance = (
  defaultLanguage: LanguageTypes,
  resourceBundles: IResourceBundle[]
) => {
  return useMemo(() => {
    const instance = i18n.createInstance()

    instance.init({ initImmediate: false, lng: defaultLanguage }, () => {
      resourceBundles.forEach((resourceBundle) => {
        instance.addResourceBundle(
          resourceBundle.lng,
          resourceBundle.ns,
          resourceBundle.resources
        )
      })
    })

    return instance
  }, [defaultLanguage, resourceBundles])
}

export default useCreateTranslationInstance
