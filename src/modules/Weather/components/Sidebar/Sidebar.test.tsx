import useSettingsContext from '../../hooks/useSettingsContext'
import { renderWithProviders } from '../../../../setupTests'
import Sidebar from './Sidebar'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import setSidebarVisibility from '../../context/actions/settings/setSidebarVisibility'
import useGetSearchFieldLocationWeather from './components/SidebarSearchField/hooks/useGetSearchFieldLocationWeather'
import useGetGeolocationWeather from './components/SidebarLocations/components/CurrentLocationCard/hooks/useGetGeolocationWeather'
import useGetSavedLocationWeather from './components/SidebarLocations/components/SavedLocationCard/hooks/useGetSavedLocationWeather'

jest.mock('../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock
const dispatcherMock = jest.fn()

jest.mock(
  './components/SidebarLocations/components/CurrentLocationCard/hooks/useGetGeolocationWeather'
)

jest.mock(
  './components/SidebarLocations/components/SavedLocationCard/hooks/useGetSavedLocationWeather'
)

jest.mock(
  './components/SidebarSearchField/hooks/useGetSearchFieldLocationWeather'
)

const useGetGeolocationWeatherMock = useGetGeolocationWeather as jest.Mock
const useGetSavedLocationWeatherMock = useGetSavedLocationWeather as jest.Mock

const useGetSearchFieldLocationWeatherMock =
  useGetSearchFieldLocationWeather as jest.Mock

describe('Sidebar', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({
      state: { isSidebarOpen: true, savedLocations: ['New York'] },
      dispatcher: dispatcherMock
    })

    useGetGeolocationWeatherMock.mockReturnValue({
      isLoading: true,
      hasError: false,
      currentWeather: null
    })

    useGetSavedLocationWeatherMock.mockReturnValue({
      isLoading: true,
      hasError: false,
      currentWeather: null
    })

    useGetSearchFieldLocationWeatherMock.mockReturnValue({
      isLoading: true,
      hasError: false,
      currentWeather: null
    })
  })

  it('should match the snapshot', () => {
    const view = renderWithProviders(
      <Sidebar onSettingsButtonClick={jest.fn()} />
    )

    expect(view.asFragment()).toMatchSnapshot()
  })

  it('should call the dispatcher with the correct action on menu button click', async () => {
    renderWithProviders(<Sidebar onSettingsButtonClick={jest.fn()} />)

    const menuButtonIcon = screen.getByTestId('MenuIcon')
    expect(menuButtonIcon).toBeInTheDocument()

    await userEvent.click(menuButtonIcon)
    expect(dispatcherMock).toHaveBeenCalledWith(setSidebarVisibility(false))
  })

  it('should run the provided settings button click handler on settings button click', async () => {
    const onSettingsButtonClickMock = jest.fn()

    renderWithProviders(
      <Sidebar onSettingsButtonClick={onSettingsButtonClickMock} />
    )

    const settingsButtonIcon = screen.getByTestId('SettingsIcon')
    expect(settingsButtonIcon).toBeInTheDocument()

    await userEvent.click(settingsButtonIcon)
    expect(onSettingsButtonClickMock).toHaveBeenCalled()
  })
})
