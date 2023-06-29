import { renderWithProviders } from '../../setupTests'
import WeatherModule from './WeatherModule'
import useAppSettingsDialog from './components/AppSettingsDialog/hooks/useAppSettingsDialog'
import AppSettingsDialog from './components/AppSettingsDialog/AppSettingsDialog'
import Sidebar from './components/Sidebar/Sidebar'
import WeatherContent from './components/WeatherContent/WeatherContent'
import testSettings from './fixtures/testSettings'

jest.mock('./components/AppSettingsDialog/hooks/useAppSettingsDialog')
const useAppSettingsDialogMock = useAppSettingsDialog as jest.Mock

jest.mock('./components/Sidebar/Sidebar')
const SidebarMock = Sidebar as jest.Mock

jest.mock('./components/WeatherContent/WeatherContent')
const WeatherContentMock = WeatherContent as jest.Mock

jest.mock('./components/AppSettingsDialog/AppSettingsDialog')
const AppSettingsDialogMock = AppSettingsDialog as jest.Mock

describe('WeatherModule', () => {
  beforeEach(() => {
    useAppSettingsDialogMock.mockReturnValue({
      isOpen: true,
      savedSettings: null,
      open: jest.fn(),
      close: jest.fn(),
      handleSubmit: jest.fn()
    })
  })

  it('should render the AppSettingsDialog component', () => {
    renderWithProviders(<WeatherModule />)

    expect(AppSettingsDialogMock).toHaveBeenCalled()
  })

  it('should not render the Sidebar and WeatherContent components when there are no saved settings', () => {
    renderWithProviders(<WeatherModule />)

    expect(SidebarMock).not.toHaveBeenCalled()
    expect(WeatherContentMock).not.toHaveBeenCalled()
  })

  it('should render the Sidebar and WeatherContent components when there are saved settings', () => {
    useAppSettingsDialogMock.mockReturnValue({
      isOpen: false,
      savedSettings: testSettings,
      open: jest.fn(),
      close: jest.fn(),
      handleSubmit: jest.fn()
    })

    renderWithProviders(<WeatherModule />)

    expect(SidebarMock).toHaveBeenCalled()
    expect(WeatherContentMock).toHaveBeenCalled()
  })
})
