import { renderWithProviders } from '../../../../../../setupTests'
import SidebarSearchField from './SidebarSearchField'
import userEvent from '@testing-library/user-event'
import useGetSearchFieldLocationWeather from './hooks/useGetSearchFieldLocationWeather'

jest.mock('./hooks/useGetSearchFieldLocationWeather')

const useGetSearchFieldLocationWeatherMock =
  useGetSearchFieldLocationWeather as jest.Mock

describe('SidebarSearchField', () => {
  it('should render the search field', () => {
    renderWithProviders(<SidebarSearchField />)

    const inputLabelElement = document.querySelector('label')
    expect(inputLabelElement).toBeInTheDocument()

    expect(inputLabelElement.innerHTML).toStrictEqual(
      'Type in the name of a location...'
    )

    const inputElement = document.querySelector('input[type="text"]')
    expect(inputElement).toBeInTheDocument()
  })

  it('should call the useGetSearchFieldLocationWeather hook with the correct value', async () => {
    const testValue = 'London'

    renderWithProviders(<SidebarSearchField />)

    const inputElement = document.querySelector('input[type="text"]')
    await userEvent.type(inputElement, testValue)

    /** Timeout is required because the input is debounced */
    setTimeout(() => {
      expect(useGetSearchFieldLocationWeatherMock).toHaveBeenCalledWith(
        testValue
      )
    }, 500)
  })
})
