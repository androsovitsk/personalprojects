import WeatherContentField, {
  IWeatherContentFieldProps
} from './WeatherContentField'
import { renderWithProviders } from '../../../../../../../../setupTests'
import { screen } from '@testing-library/react'
import useSettingsContext from '../../../../../../hooks/useSettingsContext'

jest.mock('../../../../../../hooks/useSettingsContext')
const useSettingsContextMock = useSettingsContext as jest.Mock

const defaultProps: IWeatherContentFieldProps = {
  label: 'Test label',
  text: 'Test text'
}

describe('WeatherContentField', () => {
  beforeEach(() => {
    useSettingsContextMock.mockReturnValue({ state: { isSidebarOpen: false } })
  })

  it('should render the label', () => {
    renderWithProviders(<WeatherContentField {...defaultProps} />)

    const labelElement = screen.getByText(defaultProps.label)
    expect(labelElement).toBeInTheDocument()
  })

  it('should render the text', () => {
    renderWithProviders(<WeatherContentField {...defaultProps} />)

    const textElement = screen.getByText(defaultProps.text)
    expect(textElement).toBeInTheDocument()
  })
})
