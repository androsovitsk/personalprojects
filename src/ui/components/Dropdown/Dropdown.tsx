import React from 'react'
import TextField from '../TextField/TextField'
import MenuItem from '@mui/material/MenuItem'
import IDropdownOption from './types/IDropdownOption'
import { ITextFieldProps } from '../TextField/TextField'
import withFieldBinding from '../../hocs/withFieldBinding'
import { isEmpty } from 'ramda'

interface IDropdownProps extends ITextFieldProps {
  binding: string
  label: string
  options: IDropdownOption[]
}

const Dropdown: React.FC<IDropdownProps> = ({
  binding,
  label,
  options,
  ...props
}) => {
  return (
    <TextField
      select
      binding={binding}
      label={label}
      disabled={isEmpty(options)}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

Dropdown.displayName = 'Dropdown'

export default withFieldBinding(Dropdown)
