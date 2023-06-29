import { renderWithProviders } from '../../../setupTests'
import FormDialog, { IFormDialogProps } from './FormDialog'

const defaultProps: IFormDialogProps = {
  open: false,
  title: 'Test title',
  cancelButtonProps: { label: 'Cancel', onClick: jest.fn(), hidden: false },
  submitButtonProps: { label: 'Submit', onClick: jest.fn() }
}
describe('FormDialog', () => {
  it('should only render the form when the open prop is false', () => {
    renderWithProviders(<FormDialog {...defaultProps} />)

    const formElement = document.querySelector('form')

    expect(formElement).toBeInTheDocument()
    expect(formElement).toBeEmptyDOMElement()
  })

  it('should render the dialog inside the form when the open prop is true', () => {
    renderWithProviders(<FormDialog {...defaultProps} open />)

    const dialogWithinFormElement = document
      .querySelector('form')
      .querySelector('div[role="dialog"]')

    expect(dialogWithinFormElement).toBeInTheDocument()
  })
})
