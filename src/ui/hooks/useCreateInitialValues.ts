import { useMemo } from 'react'
import { ObjectSchema } from 'yup'
import { FormikValues } from 'formik'

/** Hook that casts the provided values to the provided validation schema. */
const useCreateInitialValues = (
  schema: ObjectSchema<any>,
  values?: FormikValues
) => useMemo(() => (values ? schema.cast(values) : {}), [schema, values])

export default useCreateInitialValues
