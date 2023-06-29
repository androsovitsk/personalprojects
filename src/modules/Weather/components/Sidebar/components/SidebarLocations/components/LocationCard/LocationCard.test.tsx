import LocationCard from './LocationCard'
import LocationCardSkeleton from './components/LocationCardSkeleton/LocationCardSkeleton'
import LocationCardLayout from './components/LocationCardLayout/LocationCardLayout'
import LocationCardLoadingError from './components/LocationCardLoadingError/LocationCardLoadingError'
import { renderWithProviders } from '../../../../../../../../setupTests'
import testCurrentWeather from '../../../../../../fixtures/testCurrentWeather'

jest.mock('./components/LocationCardSkeleton/LocationCardSkeleton')
const LocationCardSkeletonMock = LocationCardSkeleton as jest.Mock

jest.mock('./components/LocationCardLoadingError/LocationCardLoadingError')
const LocationCardLoadingErrorMock = LocationCardLoadingError as jest.Mock

jest.mock('./components/LocationCardLayout/LocationCardLayout')
const LocationCardLayoutMock = LocationCardLayout as jest.Mock

describe('LocationCard', () => {
  it('should render the LocationCardSkeleton component when fetching the weather is still loading', () => {
    renderWithProviders(
      <LocationCard isLoading={true} hasError={false} currentWeather={null} />
    )

    expect(LocationCardSkeletonMock).toHaveBeenCalled()
  })

  it('should render the LocationCardLoadingError component when fetching the weather was unsuccessful', () => {
    renderWithProviders(
      <LocationCard isLoading={false} hasError={true} currentWeather={null} />
    )

    expect(LocationCardLoadingErrorMock).toHaveBeenCalled()
  })

  it('should render the LocationCardLayout component when fetching the weather data was successful', () => {
    renderWithProviders(
      <LocationCard
        isLoading={false}
        hasError={false}
        currentWeather={testCurrentWeather}
      />
    )

    expect(LocationCardLayoutMock).toHaveBeenCalled()
  })
})
