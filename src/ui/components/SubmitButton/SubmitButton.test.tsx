import { renderWithProviders } from '../../../setupTests'
import SubmitButton from './SubmitButton'
import { useFormikContext } from 'formik'

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
  useFormikContext: jest.fn()
}))

const useFormikContextMock = useFormikContext as jest.Mock
describe('SubmitButton', () => {
  it('should match the snapshot when the form is not submitting', () => {
    useFormikContextMock.mockReturnValue({ isSubmitting: false })

    const view = renderWithProviders(<SubmitButton />)
    expect(view.asFragment()).toMatchSnapshot()
  })

  it('should match the snapshot when the form is submitting', () => {
    useFormikContextMock.mockReturnValue({ isSubmitting: true })

    const view = renderWithProviders(<SubmitButton />)
    expect(view.asFragment()).toMatchSnapshot()
  })
})
