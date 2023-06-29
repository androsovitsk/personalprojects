import React, { useReducer } from 'react'
import TranslationProvider from '../../ui/components/TranslationProvider/TranslationProvider'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import weatherAppTheme from './utilities/weatherAppTheme'
import SettingsContext from './context/component/SettingsContext'
import WeatherContext from './context/component/WeatherContext'
import useModuleTranslation from '../../ui/hooks/useModuleTranslation'
import weatherModuleResourceBundle from '../../locale/weatherModuleResourceBundle'
import settingsReducer from './context/reducer/settingsReducer'
import weatherReducer from './context/reducer/weatherReducer'
import WeatherModule from './WeatherModule'

const Weather: React.FC = () => {
  const { defaultLanguage, resourceBundles } = useModuleTranslation(
    weatherModuleResourceBundle,
    'weatherApplication'
  )

  const [settingsState, settingsDispatcher] = useReducer(settingsReducer, {
    isSidebarOpen: true,
    savedLocations: []
  })

  const [weatherState, weatherDispatcher] = useReducer(weatherReducer, {
    isLoading: false,
    hasError: false,
    currentWeather: null,
    timestamp: new Date().getTime()
  })

  return (
    <TranslationProvider
      defaultLanguage={defaultLanguage}
      resourceBundles={resourceBundles}
    >
      <ThemeProvider theme={weatherAppTheme}>
        <SettingsContext.Provider
          value={{ state: settingsState, dispatcher: settingsDispatcher }}
        >
          <WeatherContext.Provider
            value={{ state: weatherState, dispatcher: weatherDispatcher }}
          >
            <WeatherModule />
          </WeatherContext.Provider>
        </SettingsContext.Provider>
      </ThemeProvider>
    </TranslationProvider>
  )
}

Weather.displayName = 'Weather'

export default Weather
