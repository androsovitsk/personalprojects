import React from 'react'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/material/Typography'

interface ITextProps extends TypographyProps {
  noMargin?: boolean
}
const Text: React.FC<ITextProps> = ({ noMargin, children, ...props }) => {
  return (
    <Typography {...(noMargin && { sx: { marginBottom: 0 } })} {...props}>
      {children}
    </Typography>
  )
}

Text.displayName = 'Text'

export default Text
