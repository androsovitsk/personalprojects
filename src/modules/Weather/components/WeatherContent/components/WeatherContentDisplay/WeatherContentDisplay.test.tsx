import useSettingsContext from '../../../../hooks/useSettingsContext'
import useWeatherContext from '../../../../hooks/useWeatherContext'
import testCurrentWeather from '../../../../fixtures/testCurrentWeather'
import { renderWithProviders } from '../../../../../../setupTests'
import WeatherContentDisplay from './WeatherContentDisplay'
import { screen } from '@testing-library/react'

jest.mock('../../../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock

jest.mock('../../../../hooks/useWeatherContext')
const useWeatherContextMock = useWeatherContext as jest.Mock

describe('WeatherContentDisplay', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({ state: { isSidebarOpen: false } })
    useWeatherContextMock.mockReturnValue({
      state: { currentWeather: testCurrentWeather }
    })
  })

  it('should render the display name field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Selected city')
    expect(labelElement).toBeInTheDocument()

    const displayNameElement = screen.getByText(testCurrentWeather.displayName)
    expect(displayNameElement).toBeInTheDocument()
  })

  it('should render the description field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Description')
    expect(labelElement).toBeInTheDocument()

    const descriptionNameElement = screen.getByText(
      testCurrentWeather.description
    )
    expect(descriptionNameElement).toBeInTheDocument()
  })

  it('should render the current temperature field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Temperature')
    expect(labelElement).toBeInTheDocument()

    const currentTemperatureElement = screen.getByText(
      `${testCurrentWeather.currentTemperature}°`
    )

    expect(currentTemperatureElement).toBeInTheDocument()
  })

  it('should render the highest temperature field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Highest temperature')
    expect(labelElement).toBeInTheDocument()

    const highestTemperatureElement = screen.getByText(
      `${testCurrentWeather.highestTemperature}°`
    )

    expect(highestTemperatureElement).toBeInTheDocument()
  })

  it('should render the lowest temperature field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Lowest temperature')
    expect(labelElement).toBeInTheDocument()

    const lowestTemperatureElement = screen.getByText(
      `${testCurrentWeather.lowestTemperature}°`
    )

    expect(lowestTemperatureElement).toBeInTheDocument()
  })

  it('should render the feels like temperature field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Feels like')
    expect(labelElement).toBeInTheDocument()

    const feelsLikeTemperatureElement = screen.getByText(
      `${testCurrentWeather.feelsLikeTemperature}°`
    )

    expect(feelsLikeTemperatureElement).toBeInTheDocument()
  })

  it('should render the humidity field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Humidity')
    expect(labelElement).toBeInTheDocument()

    const humidityElement = screen.getByText(`${testCurrentWeather.humidity}%`)
    expect(humidityElement).toBeInTheDocument()
  })

  it('should render the pressure field', () => {
    renderWithProviders(<WeatherContentDisplay />)

    const labelElement = screen.getByText('Pressure')
    expect(labelElement).toBeInTheDocument()

    const pressureElement = screen.getByText(
      `${testCurrentWeather.pressure} hPa`
    )

    expect(pressureElement).toBeInTheDocument()
  })
})
