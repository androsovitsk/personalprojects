import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import WeatherContent from './components/WeatherContent/WeatherContent'
import AppSettingsDialog from './components/AppSettingsDialog/AppSettingsDialog'
import useAppSettingsDialog from './components/AppSettingsDialog/hooks/useAppSettingsDialog'

const WeatherModule: React.FC = () => {
  const appSettingsDialog = useAppSettingsDialog()

  return (
    <React.Fragment>
      {appSettingsDialog.savedSettings && (
        <React.Fragment>
          <Sidebar onSettingsButtonClick={appSettingsDialog.open} />
          <WeatherContent />
        </React.Fragment>
      )}
      <AppSettingsDialog
        open={appSettingsDialog.isOpen}
        savedSettings={appSettingsDialog.savedSettings}
        onClose={appSettingsDialog.close}
        onSubmit={appSettingsDialog.handleSubmit}
      />
    </React.Fragment>
  )
}

WeatherModule.displayName = 'WeatherModule'

export default WeatherModule
