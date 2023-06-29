import { renderWithProviders } from '../../../setupTests'
import Form from './Form'
import { screen } from '@testing-library/react'
import Button from '@mui/material/Button'
import userEvent from '@testing-library/user-event'

describe('Form', () => {
  it('should render a form', () => {
    renderWithProviders(<Form />)

    const formElement = document.querySelector('form')
    expect(formElement).toBeInTheDocument()
  })

  it('should run the provided submit function on submit button click', async () => {
    const onSubmitMock = jest.fn()

    renderWithProviders(
      <Form onSubmit={onSubmitMock}>
        <Button type={'submit'} />
      </Form>
    )

    const submitButtonElement = screen.getByRole('button')

    await userEvent.click(submitButtonElement)
    expect(onSubmitMock).toHaveBeenCalled()
  })
})
