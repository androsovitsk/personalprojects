import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { FormikValues, useFormikContext } from 'formik'

const SubmitButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isSubmitting } = useFormikContext<FormikValues>()

  return (
    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
      {children}
    </LoadingButton>
  )
}

SubmitButton.displayName = 'SubmitButton'

export default SubmitButton
