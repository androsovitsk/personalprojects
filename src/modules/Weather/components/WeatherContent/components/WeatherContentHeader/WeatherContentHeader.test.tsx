import useSettingsContext from '../../../../hooks/useSettingsContext'
import useWeatherContext from '../../../../hooks/useWeatherContext'
import testCurrentWeather from '../../../../fixtures/testCurrentWeather'
import { renderWithProviders } from '../../../../../../setupTests'
import WeatherContentHeader from './WeatherContentHeader'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import setSidebarVisibility from '../../../../context/actions/settings/setSidebarVisibility'
import addSavedLocation from '../../../../context/actions/settings/addSavedLocation'
import removeSavedLocation from '../../../../context/actions/settings/removeSavedLocation'

jest.mock('../../../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock
const dispatcherMock = jest.fn()

jest.mock('../../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock

describe('WeatherContentHeader', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({
      state: { isSidebarOpen: false, savedLocations: ['New York'] },
      dispatcher: dispatcherMock
    })

    useWeatherContextMock.mockReturnValue({
      state: { currentWeather: testCurrentWeather }
    })
  })

  it('should render the menu icon and call the correct action via the dispatcher', async () => {
    renderWithProviders(<WeatherContentHeader />)

    const menuIconElement = screen.getByTestId('MenuIcon')
    expect(menuIconElement).toBeInTheDocument()

    await userEvent.click(menuIconElement)
    expect(dispatcherMock).toHaveBeenCalledWith(setSidebarVisibility(true))
  })

  it('should render the save location button and call the correct action when the location is not a saved location', async () => {
    renderWithProviders(<WeatherContentHeader />)

    const saveLocationButton = screen.getByRole('button', {
      name: 'Save location'
    })

    expect(saveLocationButton).toBeInTheDocument()

    await userEvent.click(saveLocationButton)

    expect(dispatcherMock).toHaveBeenCalledWith(
      addSavedLocation(testCurrentWeather.cityName)
    )
  })

  it('should render the remove location button and call the correct action when the location is a saved location', async () => {
    useSettingsContextMock.mockReturnValue({
      state: {
        isSidebarOpen: false,
        savedLocations: ['New York', testCurrentWeather.cityName]
      },
      dispatcher: dispatcherMock
    })

    renderWithProviders(<WeatherContentHeader />)

    const removeLocationButton = screen.getByRole('button', {
      name: 'Remove location'
    })

    expect(removeLocationButton).toBeInTheDocument()

    await userEvent.click(removeLocationButton)

    expect(dispatcherMock).toHaveBeenCalledWith(
      removeSavedLocation(testCurrentWeather.cityName)
    )
  })

  it('should render the title', () => {
    renderWithProviders(<WeatherContentHeader />)

    const titleElement = screen.getByText('Current weather')
    expect(titleElement).toBeInTheDocument()
  })
})
