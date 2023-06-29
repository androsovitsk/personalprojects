import React from 'react'
import MUIDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IActionButton from './types/IActionButton'
import { DialogProps } from '@mui/material/Dialog'

export interface IDialogProps extends Omit<DialogProps, 'onClose'> {
  title: string
  cancelButtonProps: Required<IActionButton>
  submitButtonProps?: IActionButton
}

const Dialog: React.FC<IDialogProps> = ({
  open,
  title,
  cancelButtonProps,
  submitButtonProps,
  children,
  ...props
}) => {
  return (
    <MUIDialog
      open={open}
      maxWidth={'sm'}
      fullWidth
      closeAfterTransition
      disablePortal
      {...props}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {!cancelButtonProps.hidden && (
          <Button onClick={cancelButtonProps.onClick}>
            {cancelButtonProps.label}
          </Button>
        )}
        {submitButtonProps && !submitButtonProps.hidden && (
          <Button
            variant='contained'
            {...(submitButtonProps.onClick
              ? { onClick: submitButtonProps.onClick }
              : { type: 'submit' })}
          >
            {submitButtonProps.label}
          </Button>
        )}
      </DialogActions>
    </MUIDialog>
  )
}

Dialog.displayName = 'Dialog'

export default Dialog
