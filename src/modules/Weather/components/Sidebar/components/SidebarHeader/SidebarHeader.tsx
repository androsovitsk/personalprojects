import React from 'react'
import Grid from '../../../../../../ui/components/Grid/Grid'
import IconButton from '@mui/material/IconButton'
import Text from '../../../../../../ui/components/Text/Text'
import { Menu, Settings } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

interface ISidebarHeaderProps {
  onMenuButtonClick: () => void
  onSettingsButtonClick: () => void
}

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({
  onMenuButtonClick,
  onSettingsButtonClick
}) => {
  const { t } = useTranslation('weatherModule')

  return (
    <React.Fragment>
      <Grid container justifyContent='space-between'>
        <Grid>
          <IconButton onClick={onMenuButtonClick}>
            <Menu />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton onClick={onSettingsButtonClick}>
            <Settings />
          </IconButton>
        </Grid>
      </Grid>
      <Text variant='h4'>{t('sidebar.title')}</Text>
    </React.Fragment>
  )
}

SidebarHeader.displayName = 'SidebarHeader'

export default SidebarHeader
