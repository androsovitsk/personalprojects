import { renderWithProviders } from '../../../setupTests'
import InfoBox from './InfoBox'
import { screen } from '@testing-library/react'

const testTitle = 'Test title'
const testText = 'Test text'

describe('InfoBox', () => {
  it('should render the title if it is provided', () => {
    renderWithProviders(<InfoBox title={testTitle} text={testText} />)

    const titleElement = screen.getByText(testTitle)
    expect(titleElement).toBeInTheDocument()
  })

  it('should not render the title if it is not provided', () => {
    renderWithProviders(<InfoBox text={testText} />)

    const titleElement = screen.queryByText(testTitle)
    expect(titleElement).not.toBeInTheDocument()
  })

  it('should render the text', () => {
    renderWithProviders(<InfoBox text={testText} />)

    const textElement = screen.getByText(testText)
    expect(textElement).toBeInTheDocument()
  })
})
