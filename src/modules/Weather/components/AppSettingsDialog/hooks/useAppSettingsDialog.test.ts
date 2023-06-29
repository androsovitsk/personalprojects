import { act, renderHook } from '@testing-library/react'
import useAppSettingsDialog from './useAppSettingsDialog'
import useLocalStorage from '../../../../../ui/hooks/useLocalStorage'
import useWeatherContext from '../../../hooks/useWeatherContext'
import { useTranslation } from 'react-i18next'
import testSettings from '../../../fixtures/testSettings'

jest.mock('../../../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

jest.mock('../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock
const dispatcherMock = jest.fn()

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: jest.fn()
}))

const useTranslationMock = useTranslation as jest.Mock
const i18nMock = { changeLanguage: jest.fn() }

describe('useAppSettingsDialog', () => {
  beforeEach(() => {
    useLocalStorageMock.mockReturnValue({ getItem: () => null })
    useWeatherContextMock.mockReturnValue({ dispatcher: dispatcherMock })
    useTranslationMock.mockReturnValue({ i18n: i18nMock })
  })

  it('should open the dialog if saved settings are not available', () => {
    const { result } = renderHook(() => useAppSettingsDialog())

    expect(result.current.isOpen).toStrictEqual(true)
  })

  it('should not open the dialog and save the settings if they are available', () => {
    useLocalStorageMock.mockReturnValue({
      getItem: () => testSettings
    })

    const { result } = renderHook(() => useAppSettingsDialog())

    expect(result.current.isOpen).toStrictEqual(false)
    expect(result.current.savedSettings).toStrictEqual(testSettings)
  })

  it('should run the expected functions when the handle submit function is called', async () => {
    const saveItemMock = jest.fn()

    useLocalStorageMock.mockReturnValue({
      getItem: () => null,
      saveItem: saveItemMock
    })

    const { result } = renderHook(() => useAppSettingsDialog())

    await act(() => result.current.handleSubmit(testSettings))

    expect(i18nMock.changeLanguage).toHaveBeenCalledWith(testSettings.language)

    expect(saveItemMock).toHaveBeenCalledWith('settings', testSettings)
    expect(result.current.savedSettings).toStrictEqual(testSettings)

    expect(dispatcherMock).toHaveBeenCalled()
    expect(result.current.isOpen).toStrictEqual(false)
  })
})
