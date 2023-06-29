import React from 'react'
import Form from '../Form/Form'
import Dialog from '../Dialog/Dialog'
import { IFormProps } from '../Form/Form'
import { IDialogProps } from '../Dialog/Dialog'
import IActionButton from '../Dialog/types/IActionButton'

export interface IFormDialogProps
  extends Omit<IDialogProps, 'submitButtonProps'>,
    Omit<IFormProps, 'onSubmit'> {
  submitButtonProps: Omit<Required<IActionButton>, 'hidden'>
}

const FormDialog: React.FC<IFormDialogProps> = ({
  open,
  title,
  cancelButtonProps,
  submitButtonProps,
  validateOnBlur,
  validateOnChange,
  validationSchema,
  initialValues,
  children,
  ...props
}) => {
  return (
    <Form
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={submitButtonProps.onClick}
    >
      <Dialog
        open={open}
        title={title}
        cancelButtonProps={cancelButtonProps}
        submitButtonProps={{ label: submitButtonProps.label }}
        {...props}
      >
        {children}
      </Dialog>
    </Form>
  )
}

FormDialog.displayName = 'FormDialog'

export default FormDialog
