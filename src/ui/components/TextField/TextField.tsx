import React from 'react'
import MUITextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material/TextField'
import withFieldBinding from '../../hocs/withFieldBinding'

export interface ITextFieldProps extends StandardTextFieldProps {
  binding: string
}

const TextField: React.FC<ITextFieldProps> = ({ ...props }) => {
  return <MUITextField fullWidth {...props} />
}

TextField.displayName = 'TextField'

export default withFieldBinding(TextField)
