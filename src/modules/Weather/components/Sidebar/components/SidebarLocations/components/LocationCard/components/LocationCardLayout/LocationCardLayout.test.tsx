import testCurrentWeather from '../../../../../../../../fixtures/testCurrentWeather'
import { renderWithProviders } from '../../../../../../../../../../setupTests'
import { screen } from '@testing-library/react'
import LocationCardLayout from './LocationCardLayout'

describe('LocationCardLayout', () => {
  it('should the required location card fields', () => {
    renderWithProviders(
      <LocationCardLayout currentWeather={testCurrentWeather} />
    )

    const displayNameElement = screen.getByRole('heading', {
      name: testCurrentWeather.displayName,
      level: 6
    })

    expect(displayNameElement).toBeInTheDocument()

    const currentTemperatureElement = screen.getByText(
      `${testCurrentWeather.currentTemperature}°`
    )

    expect(currentTemperatureElement).toBeInTheDocument()

    const descriptionElement = screen.getByText(testCurrentWeather.description)
    expect(descriptionElement).toBeInTheDocument()

    const lowestHighestTemperatureElement = screen.getByText(
      `H: ${testCurrentWeather.highestTemperature}°, L: ${testCurrentWeather.lowestTemperature}°`
    )

    expect(lowestHighestTemperatureElement).toBeInTheDocument()
  })

  it('should render the text for your location when the weather data is for a geolocation', () => {
    renderWithProviders(
      <LocationCardLayout currentWeather={testCurrentWeather} isUserLocation />
    )

    const locationNameElement = screen.getByText('Your location')
    expect(locationNameElement).toBeInTheDocument()
  })

  it('should render the display name when the weather data is for a city', () => {
    renderWithProviders(
      <LocationCardLayout currentWeather={testCurrentWeather} />
    )

    const locationNameElement = screen.getByText(testCurrentWeather.displayName)
    expect(locationNameElement).toBeInTheDocument()
  })
})
