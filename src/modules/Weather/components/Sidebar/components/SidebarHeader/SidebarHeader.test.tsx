import { renderWithProviders } from '../../../../../../setupTests'
import SidebarHeader from './SidebarHeader'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SidebarHeader', () => {
  it('should render the menu button and run the provided function on click', async () => {
    const onMenuButtonClickMock = jest.fn()

    renderWithProviders(
      <SidebarHeader
        onMenuButtonClick={onMenuButtonClickMock}
        onSettingsButtonClick={jest.fn()}
      />
    )

    const menuIconElement = screen.getByTestId('MenuIcon')
    expect(menuIconElement).toBeInTheDocument()

    await userEvent.click(menuIconElement)
    expect(onMenuButtonClickMock).toHaveBeenCalled()
  })

  it('should render the settings button and run the provided function on click', async () => {
    const onSettingsButtonClickMock = jest.fn()

    renderWithProviders(
      <SidebarHeader
        onMenuButtonClick={jest.fn()}
        onSettingsButtonClick={onSettingsButtonClickMock}
      />
    )

    const settingsIconElement = screen.getByTestId('SettingsIcon')
    expect(settingsIconElement).toBeInTheDocument()

    await userEvent.click(settingsIconElement)
    expect(onSettingsButtonClickMock).toHaveBeenCalled()
  })

  it('should render the header title', () => {
    renderWithProviders(
      <SidebarHeader
        onMenuButtonClick={jest.fn()}
        onSettingsButtonClick={jest.fn()}
      />
    )

    const headerElement = screen.getByRole('heading', {
      name: 'Weather',
      level: 4
    })

    expect(headerElement).toBeInTheDocument()
  })
})
