import useLocalStorage from '../../../ui/hooks/useLocalStorage'
import useSettingsContext from './useSettingsContext'
import { renderHook } from '@testing-library/react'
import useUpdateSavedLocations from './useUpdateSavedLocations'

jest.mock('../../../ui/hooks/useLocalStorage')
const useLocalStorageMock = useLocalStorage as jest.Mock

jest.mock('./useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock
const dispatcherMock = jest.fn()

const testSavedLocations = ['New York']

describe('useUpdateSavedLocations', () => {
  it('should save the locations stored in the local storage to the context', () => {
    useLocalStorageMock.mockReturnValue({
      getItem: () => testSavedLocations,
      saveItem: jest.fn()
    })

    useSettingsContextMock.mockReturnValue({
      state: { savedLocations: [] },
      dispatcher: dispatcherMock
    })

    renderHook(() => useUpdateSavedLocations())

    expect(dispatcherMock).toHaveBeenCalled()
  })

  it('should not save the locations to the context if the storage is empty', () => {
    useLocalStorageMock.mockReturnValue({
      getItem: () => null,
      saveItem: jest.fn()
    })

    useSettingsContextMock.mockReturnValue({
      state: { savedLocations: [] },
      dispatcher: dispatcherMock
    })

    renderHook(() => useUpdateSavedLocations())

    expect(dispatcherMock).not.toHaveBeenCalled()
  })

  it('should save the locations from the context to the local storage', () => {
    const saveItemMock = jest.fn()

    const testSavedLocations = useLocalStorageMock.mockReturnValue({
      getItem: jest.fn(),
      saveItem: saveItemMock
    })

    useSettingsContextMock.mockReturnValue({
      state: { savedLocations: testSavedLocations },
      dispatcher: jest.fn()
    })

    renderHook(() => useUpdateSavedLocations())

    expect(saveItemMock).toHaveBeenCalledWith(
      'savedLocations',
      testSavedLocations
    )
  })
})
