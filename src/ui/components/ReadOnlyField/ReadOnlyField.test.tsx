import { renderWithProviders } from '../../../setupTests'
import ReadOnlyField from './ReadOnlyField'
import { screen } from '@testing-library/react'

const testLabel = 'Test label'
const testValue = 'Test value'

describe('ReadOnlyField', () => {
  it('should render the label', () => {
    renderWithProviders(<ReadOnlyField label={testLabel} value={testValue} />)

    const labelElement = screen.getByText(testLabel)
    expect(labelElement).toBeInTheDocument()
  })

  it('should render the value', () => {
    renderWithProviders(<ReadOnlyField label={testLabel} value={testValue} />)

    const valueElement = screen.getByText(testValue)
    expect(valueElement).toBeInTheDocument()
  })
})
