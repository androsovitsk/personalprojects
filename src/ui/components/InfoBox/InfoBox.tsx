import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import AlertTypes from './types/AlertTypes'

interface IInfoBoxProps {
  type?: AlertTypes
  title?: string
  text: string
  noIcon?: boolean
}

const InfoBox: React.FC<IInfoBoxProps> = ({
  type = AlertTypes.INFO,
  title,
  text,
  noIcon = false
}) => {
  return (
    <Alert
      severity={type}
      sx={[
        {
          marginBottom: (theme) => theme.spacing(2),
          '& .MuiAlertTitle-root': { fontWeight: 600, marginBottom: 0 }
        }
      ]}
      {...(noIcon && { icon: false })}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {text}
    </Alert>
  )
}

InfoBox.displayName = 'InfoBox'

export default InfoBox
