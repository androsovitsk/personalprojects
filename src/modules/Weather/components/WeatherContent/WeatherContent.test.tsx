import WeatherContentHeader from './components/WeatherContentHeader/WeatherContentHeader'
import { renderWithProviders } from '../../../../setupTests'
import WeatherContent from './WeatherContent'
import useSettingsContext from '../../hooks/useSettingsContext'
import useWeatherContext from '../../hooks/useWeatherContext'
import { screen } from '@testing-library/react'
import WeatherContentDisplay from './components/WeatherContentDisplay/WeatherContentDisplay'
import testCurrentWeather from '../../fixtures/testCurrentWeather'

jest.mock('../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock

jest.mock('../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock

jest.mock('./components/WeatherContentHeader/WeatherContentHeader')
const WeatherContentHeaderMock = WeatherContentHeader as jest.Mock

jest.mock('./components/WeatherContentDisplay/WeatherContentDisplay')
const WeatherContentDisplayMock = WeatherContentDisplay as jest.Mock

describe('WeatherContent', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({ state: { isSidebarOpen: false } })
  })

  it('should render the header', () => {
    useWeatherContextMock.mockReturnValue({
      state: { isLoading: true, hasError: false, currentWeather: null }
    })

    renderWithProviders(<WeatherContent />)

    expect(WeatherContentHeaderMock).toHaveBeenCalled()
  })

  it('should render the progress bar when weather data is still loading', () => {
    useWeatherContextMock.mockReturnValue({
      state: { isLoading: true, hasError: false, currentWeather: null }
    })

    renderWithProviders(<WeatherContent />)

    const progressBarElement = document.querySelector(
      'span[role="progressbar"]'
    )

    expect(progressBarElement).toBeInTheDocument()
  })

  it('should render the error info box when fetching resulted in an error', () => {
    useWeatherContextMock.mockReturnValue({
      state: { isLoading: false, hasError: true, currentWeather: null }
    })

    renderWithProviders(<WeatherContent />)

    const titleElement = screen.getByText('Error')
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(
      'Obtaining the weather information of this city was unsuccessful. Please check whether the city name or API-key is valid.'
    )

    expect(textElement).toBeInTheDocument()
  })

  it('should render the WeatherContentDisplay component when weather data is available', () => {
    useWeatherContextMock.mockReturnValue({
      state: {
        isLoading: false,
        hasError: false,
        currentWeather: testCurrentWeather
      }
    })

    renderWithProviders(<WeatherContent />)

    expect(WeatherContentDisplayMock).toHaveBeenCalled()
  })

  it('should render the initiate search info box when fetching is not in progress', () => {
    useWeatherContextMock.mockReturnValue({
      state: { isLoading: false, hasError: false, currentWeather: null }
    })

    renderWithProviders(<WeatherContent />)

    const titleElement = screen.getByText('Information')
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(
      'Search for a city or click on a location card to display the weather information.'
    )

    expect(textElement).toBeInTheDocument()
  })
})
