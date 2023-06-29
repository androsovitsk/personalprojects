import { useMemo } from 'react'
import { object, ObjectShape } from 'yup'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

/** Hook that creates a validation schema with the provided constructor. */
const useCreateValidationSchema = (
  constructValidationSchema: (t: TFunction) => ObjectShape
) => {
  const { t } = useTranslation()

  return useMemo(
    () => object().shape(constructValidationSchema(t)),
    [constructValidationSchema, t]
  )
}

export default useCreateValidationSchema
