import { renderWithProviders } from '../../../setupTests'
import Skeleton from './Skeleton'

describe('Skeleton', () => {
  it('should match the snapshot', () => {
    const view = renderWithProviders(<Skeleton />)

    expect(view.asFragment()).toMatchSnapshot()
  })

  it('should match the snapshot when no margin is applied', () => {
    const view = renderWithProviders(<Skeleton noMargin />)

    expect(view.asFragment()).toMatchSnapshot()
  })
})
