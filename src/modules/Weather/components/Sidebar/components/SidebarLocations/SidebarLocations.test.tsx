import useUpdateSavedLocations from '../../../../hooks/useUpdateSavedLocations'
import { renderWithProviders } from '../../../../../../setupTests'
import SidebarLocations from './SidebarLocations'
import useSettingsContext from '../../../../hooks/useSettingsContext'
import CurrentLocationCard from './components/CurrentLocationCard/CurrentLocationCard'
import SavedLocationCard from './components/SavedLocationCard/SavedLocationCard'

jest.mock('../../../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock

jest.mock('../../../../hooks/useUpdateSavedLocations')
const useUpdateSavedLocationsMock = useUpdateSavedLocations as jest.Mock

jest.mock('./components/CurrentLocationCard/CurrentLocationCard')
const CurrentLocationCardMock = CurrentLocationCard as jest.Mock

jest.mock('./components/SavedLocationCard/SavedLocationCard')
const SavedLocationCardMock = SavedLocationCard as jest.Mock

const testSavedLocations = ['New York', 'London']

describe('SidebarLocations', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({
      state: { savedLocations: testSavedLocations }
    })
  })

  it('should call the useUpdateSavedLocations hooks', () => {
    renderWithProviders(<SidebarLocations />)

    expect(useUpdateSavedLocationsMock).toHaveBeenCalled()
  })

  it('should render the CurrentLocationCard component', () => {
    renderWithProviders(<SidebarLocations />)

    expect(CurrentLocationCardMock).toHaveBeenCalled()
  })

  it('should render the SavedLocationCard component saved locations length amount of times', () => {
    renderWithProviders(<SidebarLocations />)

    expect(SavedLocationCardMock).toHaveBeenCalledTimes(
      testSavedLocations.length
    )
  })
})
