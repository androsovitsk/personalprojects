import { renderWithProviders } from '../../../setupTests'
import Dropdown from './Dropdown'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  label: 'Test label',
  value: 'firstValue',
  options: [
    { label: 'First value', value: 'firstValue' },
    { label: 'Second value', value: 'secondValue' }
  ]
}

describe('Dropdown', () => {
  it('should render the label', () => {
    renderWithProviders(<Dropdown {...defaultProps} />)

    const labelElement = document.querySelector('label')

    expect(labelElement).toBeInTheDocument()
    expect(labelElement.innerHTML).toStrictEqual(defaultProps.label)
  })

  it('should set the default value', () => {
    renderWithProviders(<Dropdown {...defaultProps} />)

    const optionWithDefaultValueLabel = defaultProps.options.find(
      (option) => option.value === defaultProps.value
    ).label

    const valueContainerElement = document.querySelector('div[role="button"]')
    expect(valueContainerElement).toBeInTheDocument()

    expect(valueContainerElement.innerHTML).toStrictEqual(
      optionWithDefaultValueLabel
    )
  })

  it('should render the options', async () => {
    renderWithProviders(<Dropdown {...defaultProps} />)

    const dropdownTriggerElement = screen.getByRole('button')
    await userEvent.click(dropdownTriggerElement)

    defaultProps.options.forEach((option) => {
      const optionElement = screen.getByRole('option', {
        name: option.label,
        hidden: true
      })

      expect(optionElement).toBeInTheDocument()
    })
  })

  it('should be disabled if there are no options', () => {
    renderWithProviders(<Dropdown {...defaultProps} value={''} options={[]} />)

    const selectElement = document.querySelector('input')
    expect(selectElement).toHaveProperty('disabled')
  })
})
