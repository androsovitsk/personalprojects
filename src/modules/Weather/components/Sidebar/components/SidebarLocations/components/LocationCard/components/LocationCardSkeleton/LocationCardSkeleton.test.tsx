import { renderWithProviders } from '../../../../../../../../../../setupTests'
import LocationCardSkeleton from './LocationCardSkeleton'

describe('LocationCardSkeleton', () => {
  it('should match the snapshot', () => {
    const view = renderWithProviders(<LocationCardSkeleton />)

    expect(view.asFragment()).toMatchSnapshot()
  })
})
