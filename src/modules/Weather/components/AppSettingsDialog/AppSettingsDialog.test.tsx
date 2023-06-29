import AppSettingsDialog, { ISettingsDialogProps } from './AppSettingsDialog'
import testSettings from '../../fixtures/testSettings'
import { renderWithProviders } from '../../../../setupTests'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const defaultProps: ISettingsDialogProps = {
  open: true,
  savedSettings: testSettings,
  onClose: jest.fn(),
  onSubmit: jest.fn()
}

describe('AppSettingsDialog', () => {
  it('should only render an empty form when the open prop is false', () => {
    renderWithProviders(<AppSettingsDialog {...defaultProps} open={false} />)

    const formElement = document.querySelector('form')

    expect(formElement).toBeInTheDocument()
    expect(formElement).toBeEmptyDOMElement()
  })

  it('should render the correct title', () => {
    renderWithProviders(<AppSettingsDialog {...defaultProps} />)

    const titleElement = screen.getByRole('heading', {
      name: 'App settings',
      hidden: true
    })

    expect(titleElement).toBeInTheDocument()
  })

  it('should render the api key field', () => {
    renderWithProviders(<AppSettingsDialog {...defaultProps} />)

    const apiKeyFieldElement = document.querySelector('input[name="key"]')
    expect(apiKeyFieldElement).toBeInTheDocument()
  })

  it('should render the temperature unit dropdown with the correct options', async () => {
    renderWithProviders(<AppSettingsDialog {...defaultProps} />)

    const temperatureUnitDropdownElement = document.querySelector(
      'input[name="temperatureUnit"]'
    )

    expect(temperatureUnitDropdownElement).toBeInTheDocument()

    const temperatureUnitTriggerElement = document
      .querySelector('div[binding="temperatureUnit"]')
      .querySelector('div[role="button"]')

    await userEvent.click(temperatureUnitTriggerElement)

    const expectedOptions = ['Celsius', 'Fahrenheit', 'Kelvin']

    expectedOptions.forEach((expectedOption) => {
      const optionElement = screen.getByRole('option', {
        name: expectedOption,
        hidden: true
      })

      expect(optionElement).toBeInTheDocument()
    })
  })

  it('should render the language dropdown with the correct options', async () => {
    renderWithProviders(<AppSettingsDialog {...defaultProps} />)

    const languageDropdownElement = document.querySelector(
      'input[name="language"]'
    )

    expect(languageDropdownElement).toBeInTheDocument()

    const languageTriggerElement = document
      .querySelector('div[binding="language"]')
      .querySelector('div[role="button"]')

    await userEvent.click(languageTriggerElement)

    const expectedOptions = ['English', 'Hungarian', 'Polish']

    expectedOptions.forEach((expectedOption) => {
      const optionElement = screen.getByRole('option', {
        name: expectedOption,
        hidden: true
      })

      expect(optionElement).toBeInTheDocument()
    })
  })

  it('should render the cancel button and run the provided close handler function', async () => {
    const onCloseMock = jest.fn()

    renderWithProviders(
      <AppSettingsDialog {...defaultProps} onClose={onCloseMock} />
    )

    const cancelButtonElement = screen.getByRole('button', {
      name: 'Cancel',
      hidden: true
    })

    expect(cancelButtonElement).toBeInTheDocument()

    await userEvent.click(cancelButtonElement)
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should not render the cancel button when saved settings are not available', () => {
    renderWithProviders(
      <AppSettingsDialog {...defaultProps} savedSettings={null} />
    )

    const cancelButtonElement = screen.queryByRole('button', {
      name: 'Cancel',
      hidden: true
    })

    expect(cancelButtonElement).not.toBeInTheDocument()
  })

  it('should render the submit button and run the provided submit handler function', async () => {
    const onSubmitMock = jest.fn()

    renderWithProviders(
      <AppSettingsDialog {...defaultProps} onSubmit={onSubmitMock} />
    )

    const submitButtonElement = document.querySelector('button[type="submit"]')
    expect(submitButtonElement).toBeInTheDocument()

    await userEvent.click(submitButtonElement)
    expect(onSubmitMock).toHaveBeenCalled()
  })

  it('should display the validation errors if the fields are not filled in', async () => {
    renderWithProviders(
      <AppSettingsDialog {...defaultProps} savedSettings={null} />
    )

    const submitButtonElement = document.querySelector('button[type="submit"]')
    await userEvent.click(submitButtonElement)

    const apiKeyValidationErrorElement = screen.getByText(
      'API-key is a required field.'
    )

    expect(apiKeyValidationErrorElement).toBeInTheDocument()

    const temperatureUnitValidationErrorElement = screen.getByText(
      'Temperature unit is a required field.'
    )

    expect(temperatureUnitValidationErrorElement).toBeInTheDocument()

    const languageValidationErrorElement = screen.getByText(
      'Language is a required field.'
    )

    expect(languageValidationErrorElement).toBeInTheDocument()
  })

  it('should display a validation error when the api key field is not 32 characters long', async () => {
    renderWithProviders(
      <AppSettingsDialog
        {...defaultProps}
        savedSettings={{ ...testSettings, key: 'lessThan32Key' }}
      />
    )

    const submitButtonElement = document.querySelector('button[type="submit"]')
    await userEvent.click(submitButtonElement)

    const validationErrorElement = screen.getByText(
      'API-key should be exactly 32 characters long.'
    )

    expect(validationErrorElement).toBeInTheDocument()
  })
})
