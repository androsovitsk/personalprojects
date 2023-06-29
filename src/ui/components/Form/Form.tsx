import React, { useCallback } from 'react'
import {
  Formik,
  Form as FormikForm,
  FormikConfig,
  FormikValues,
  FormikHelpers
} from 'formik'

export interface IFormProps extends React.PropsWithChildren {
  validateOnBlur?: boolean
  validateOnChange?: boolean
  validationSchema?: FormikConfig<FormikValues>['validationSchema']
  initialValues?: FormikValues
  onSubmit?: (values: FormikValues) => void
}

const Form: React.FC<IFormProps> = ({
  validateOnBlur = true,
  validateOnChange = false,
  validationSchema = null,
  initialValues = {},
  onSubmit = () => null,
  children
}) => {
  const handleSubmit = useCallback(
    (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
      onSubmit(values)
      formikHelpers.setSubmitting(false)
    },
    [onSubmit]
  )

  return (
    <Formik
      enableReinitialize
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <FormikForm noValidate>{children}</FormikForm>
    </Formik>
  )
}

Form.displayName = 'Form'

export default Form
