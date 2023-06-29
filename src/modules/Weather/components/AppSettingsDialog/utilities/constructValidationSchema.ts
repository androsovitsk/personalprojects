import * as yup from 'yup'
import { TFunction } from 'i18next'

const constructValidationSchema = (t: TFunction) => ({
  key: yup
    .string()
    .min(
      32,
      t('common:validation.exactLength', {
        item: t('weatherModule:settingsDialog.fields.key'),
        length: 32
      })
    )
    .max(
      32,
      t('common:validation.exactLength', {
        item: t('weatherModule:settingsDialog.fields.key'),
        length: 32
      })
    )
    .required(
      t('common:validation.required', {
        item: t('weatherModule:settingsDialog.fields.key')
      })
    )
    .nullable(),
  temperatureUnit: yup
    .string()
    .required(
      t('common:validation.required', {
        item: t('weatherModule:settingsDialog.fields.temperatureUnit')
      })
    )
    .nullable(),
  language: yup
    .string()
    .required(
      t('common:validation.required', {
        item: t('weatherModule:settingsDialog.fields.language')
      })
    )
    .nullable()
})

export default constructValidationSchema
