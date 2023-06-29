import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import TranslationProvider from './ui/components/TranslationProvider/TranslationProvider'
import LanguageTypes from './ui/components/TranslationProvider/types/LanguageTypes'
import resourceBundles from './locale'
import { createTheme, ThemeProvider } from '@mui/material'

beforeEach(() => {
  fetchMock.reset()
  jest.clearAllMocks()
})

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme({})}>
      <TranslationProvider
        defaultLanguage={LanguageTypes.ENGLISH}
        resourceBundles={resourceBundles}
      >
        {children}
      </TranslationProvider>
    </ThemeProvider>
  )
}

export const renderWithProviders = (element: React.ReactElement) =>
  render(element, {
    wrapper: Wrapper
  })
