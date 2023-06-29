import { renderHook } from '@testing-library/react'
import useModuleTranslation from './useModuleTranslation'
import IResourceBundle from '../components/TranslationProvider/types/IResourceBundle'
import LanguageTypes from '../components/TranslationProvider/types/LanguageTypes'
import useLocalStorage from './useLocalStorage'
import commonResourceBundle from '../../locale/commonResourceBundle'

jest.mock('./useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

const testResourceBundle: IResourceBundle[] = [
  { lng: 'en', ns: 'testBundle', resources: {} }
]

const testStorageKey = 'testStorageKey'

describe('useModuleTranslation', () => {
  beforeEach(() => {
    useLocalStorageMock.mockReturnValue({
      getItem: jest.fn()
    })
  })

  it('should add the provided resource bundle alongside the common resource bundle', () => {
    const { result } = renderHook(() =>
      useModuleTranslation(testResourceBundle, testStorageKey)
    )

    expect(result.current.resourceBundles).toStrictEqual([
      ...commonResourceBundle,
      ...testResourceBundle
    ])
  })

  it('should not set the default language if it is not available in the local storage', () => {
    const { result } = renderHook(() =>
      useModuleTranslation(testResourceBundle, testStorageKey)
    )

    expect(result.current.defaultLanguage).toStrictEqual(LanguageTypes.ENGLISH)
  })

  it('should set the default language if it is available in the local storage', async () => {
    useLocalStorageMock.mockReturnValue({
      getItem: () => ({
        language: LanguageTypes.HUNGARIAN
      })
    })

    const { result } = renderHook(() =>
      useModuleTranslation(testResourceBundle, testStorageKey)
    )

    expect(result.current.defaultLanguage).toStrictEqual(
      LanguageTypes.HUNGARIAN
    )
  })

  it('should call the get item function with the provided storage key', () => {
    renderHook(() => useModuleTranslation(testResourceBundle, testStorageKey))

    expect(useLocalStorageMock).toHaveBeenCalledWith(testStorageKey)
  })
})
