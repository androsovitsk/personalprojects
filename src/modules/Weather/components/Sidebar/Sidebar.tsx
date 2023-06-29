import React from 'react'
import Drawer from '@mui/material/Drawer'
import SidebarHeader from './components/SidebarHeader/SidebarHeader'
import SidebarLocations from './components/SidebarLocations/SidebarLocations'
import SidebarSearchField from './components/SidebarSearchField/SidebarSearchField'
import useSettingsContext from '../../hooks/useSettingsContext'
import setSidebarVisibility from '../../context/actions/settings/setSidebarVisibility'

interface ISidebarProps {
  onSettingsButtonClick: () => void
}

const Sidebar: React.FC<ISidebarProps> = ({ onSettingsButtonClick }) => {
  const {
    state: { isSidebarOpen },
    dispatcher
  } = useSettingsContext()

  return (
    <Drawer
      open={isSidebarOpen}
      variant='persistent'
      anchor='left'
      sx={{
        '& .MuiDrawer-paper': (theme) => ({
          [theme.breakpoints.down('md')]: {
            minWidth: `calc(100% - ${theme.spacing(4)})`
          },
          [theme.breakpoints.up('md')]: { width: 360 },
          padding: theme.spacing(2)
        })
      }}
    >
      <SidebarHeader
        onMenuButtonClick={() => dispatcher(setSidebarVisibility(false))}
        onSettingsButtonClick={onSettingsButtonClick}
      />
      <SidebarSearchField />
      <SidebarLocations />
    </Drawer>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
