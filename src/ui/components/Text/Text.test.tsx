import { renderWithProviders } from '../../../setupTests'
import Text from './Text'

const testText = 'Test text'

describe('Text', () => {
  it('should match the snapshot', () => {
    const view = renderWithProviders(<Text>{testText}</Text>)

    expect(view.asFragment()).toMatchSnapshot()
  })

  it('should match the snapshot when no margin is applied', () => {
    const view = renderWithProviders(<Text noMargin>{testText}</Text>)

    expect(view.asFragment()).toMatchSnapshot()
  })
})
