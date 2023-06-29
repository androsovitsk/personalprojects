import React from 'react'
import { FormikValues, useFormikContext } from 'formik'
import { isNil, path } from 'ramda'

interface IComponentProps {
  binding?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  [key: string]: any
}

const withAddedFieldBinding =
  (FormField: React.ComponentType<any>) =>
  ({ binding, onChange, ...props }: IComponentProps) => {
    const {
      values: { [binding]: fieldValue },
      errors,
      isSubmitting,
      handleChange,
      handleBlur
    } = useFormikContext<FormikValues>()

    return (
      <FormField
        binding={binding}
        name={binding}
        value={fieldValue ?? ''}
        disabled={isSubmitting}
        error={!isNil(path([binding], errors))}
        helperText={path([binding], errors)}
        onChange={(event) => {
          onChange?.(event)
          handleChange(event)
        }}
        onBlur={handleBlur}
        {...props}
      />
    )
  }

const withFieldBinding =
  (FormField: React.ComponentType<any>) => (props: IComponentProps) => {
    const Component = props.binding
      ? withAddedFieldBinding(FormField)
      : FormField

    return <Component {...props} />
  }

export default withFieldBinding
