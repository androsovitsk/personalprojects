import { renderWithProviders } from '../../../setupTests'
import Dialog, { IDialogProps } from './Dialog'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const defaultProps: IDialogProps = {
  open: true,
  title: 'Test title',
  cancelButtonProps: { label: 'Cancel', onClick: jest.fn(), hidden: false }
}

const testSubmitLabel = 'Submit'

describe('Dialog', () => {
  it('should not render anything when the provided open prop is false', () => {
    const { container } = renderWithProviders(
      <Dialog {...defaultProps} open={false} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('should render the dialog', () => {
    renderWithProviders(<Dialog {...defaultProps} />)

    const dialogElement = document.querySelector('div[role="dialog"]')
    expect(dialogElement).toBeInTheDocument()
  })

  it('should render the title', () => {
    renderWithProviders(<Dialog {...defaultProps} />)

    const titleElement = screen.getByRole('heading', {
      name: defaultProps.title,
      level: 2,
      hidden: true
    })

    expect(titleElement).toBeInTheDocument()
  })

  it('should render the content', () => {
    const testId = 'testId'

    renderWithProviders(
      <Dialog {...defaultProps}>
        <div data-testid={testId} />
      </Dialog>
    )

    const contentElement = screen.getByTestId(testId)
    expect(contentElement).toBeInTheDocument()
  })

  it('should render the cancel button and run the provided on click function', async () => {
    renderWithProviders(<Dialog {...defaultProps} />)

    const cancelButtonElement = screen.getByRole('button', {
      name: defaultProps.cancelButtonProps.label,
      hidden: true
    })

    expect(cancelButtonElement).toBeInTheDocument()

    await userEvent.click(cancelButtonElement)
    expect(defaultProps.cancelButtonProps.onClick).toHaveBeenCalled()
  })

  it('should not render the cancel button when it is hidden', () => {
    renderWithProviders(
      <Dialog
        {...defaultProps}
        cancelButtonProps={{ ...defaultProps.cancelButtonProps, hidden: true }}
      />
    )

    const cancelButtonElement = screen.queryByRole('button', {
      name: defaultProps.cancelButtonProps.label,
      hidden: true
    })

    expect(cancelButtonElement).not.toBeInTheDocument()
  })

  it('should render the submit button if it is provided', () => {
    renderWithProviders(
      <Dialog
        {...defaultProps}
        submitButtonProps={{ label: testSubmitLabel }}
      />
    )

    const submitButtonElement = screen.getByRole('button', {
      name: testSubmitLabel,
      hidden: true
    })

    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toHaveProperty('type', 'submit')
  })

  it('should render the submit button with the provided on click function if it is provided', async () => {
    const onClickMock = jest.fn()

    renderWithProviders(
      <Dialog
        {...defaultProps}
        submitButtonProps={{ label: testSubmitLabel, onClick: onClickMock }}
      />
    )

    const submitButtonElement = screen.getByRole('button', {
      name: testSubmitLabel,
      hidden: true
    })

    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).not.toHaveProperty('type', 'submit')

    await userEvent.click(submitButtonElement)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render the submit button when it is not provided', () => {
    renderWithProviders(<Dialog {...defaultProps} />)

    const submitButtonElement = screen.queryByRole('button', {
      name: testSubmitLabel,
      hidden: true
    })

    expect(submitButtonElement).not.toBeInTheDocument()
  })

  it('should not render the submit button when it is hidden', () => {
    renderWithProviders(
      <Dialog
        {...defaultProps}
        submitButtonProps={{ label: testSubmitLabel, hidden: true }}
      />
    )

    const submitButtonElement = screen.queryByRole('button', {
      name: testSubmitLabel,
      hidden: true
    })

    expect(submitButtonElement).not.toBeInTheDocument()
  })
})
