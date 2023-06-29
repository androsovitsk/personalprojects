import { renderWithProviders } from '../../../../../../../../../../setupTests'
import { screen } from '@testing-library/react'
import LocationCardLoadingError from './LocationCardLoadingError'
import testCurrentWeather from '../../../../../../../../fixtures/testCurrentWeather'

describe('LocationCardLoadingError', () => {
  it('should render the loading error info box with the correct text on error when the location is a geolocation', () => {
    renderWithProviders(<LocationCardLoadingError />)

    const titleElement = screen.getByText('Your location')
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(
      'Obtaining the weather information of your location was unsuccessful. Please check whether geolocation access is enabled or the API-key is valid.'
    )

    expect(textElement).toBeInTheDocument()
  })

  it('should render the loading error info box with the correct text on error when the location is a city', () => {
    const testCityName = testCurrentWeather.cityName

    renderWithProviders(<LocationCardLoadingError cityName={testCityName} />)

    const titleElement = screen.getByText(testCityName)
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(
      `Obtaining the weather information of ${testCityName} was unsuccessful. Please check whether the location name or API-key is valid.`
    )

    expect(textElement).toBeInTheDocument()
  })
})
