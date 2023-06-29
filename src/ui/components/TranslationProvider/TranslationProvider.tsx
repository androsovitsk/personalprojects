import React from 'react'
import { I18nextProvider } from 'react-i18next'
import IResourceBundle from './types/IResourceBundle'
import LanguageTypes from './types/LanguageTypes'
import useCreateTranslationInstance from './hooks/useCreateTranslationInstance'

interface ITranslationProviderProps extends React.PropsWithChildren {
  defaultLanguage: LanguageTypes
  resourceBundles: IResourceBundle[]
}

const TranslationProvider: React.FC<ITranslationProviderProps> = ({
  defaultLanguage,
  resourceBundles,
  children
}) => {
  const translationInstance = useCreateTranslationInstance(
    defaultLanguage,
    resourceBundles
  )

  return (
    <I18nextProvider i18n={translationInstance}>{children}</I18nextProvider>
  )
}

TranslationProvider.displayName = 'TranslationProvider'

export default TranslationProvider
