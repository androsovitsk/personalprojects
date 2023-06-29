import React from 'react'
import Dropdown from '../../../../ui/components/Dropdown/Dropdown'
import FormDialog from '../../../../ui/components/FormDialog/FormDialog'
import TextField from '../../../../ui/components/TextField/TextField'
import TemperatureUnitTypes from '../../types/TemperatureUnitTypes'
import LanguageTypes from '../../../../ui/components/TranslationProvider/types/LanguageTypes'
import IAppSettingsDialogFormValues from './types/IAppSettingsDialogFormValues'
import useCreateValidationSchema from '../../../../ui/hooks/useCreateValidationSchema'
import constructValidationSchema from './utilities/constructValidationSchema'
import useCreateInitialValues from '../../../../ui/hooks/useCreateInitialValues'
import { isNil } from 'ramda'
import { useTranslation } from 'react-i18next'

export interface ISettingsDialogProps {
  open: boolean
  savedSettings?: IAppSettingsDialogFormValues
  onClose: () => void
  onSubmit: (values: IAppSettingsDialogFormValues) => void
}

const AppSettingsDialog: React.FC<ISettingsDialogProps> = ({
  open,
  savedSettings,
  onClose,
  onSubmit
}) => {
  const { t } = useTranslation()

  const validationSchema = useCreateValidationSchema(constructValidationSchema)
  const initialValues = useCreateInitialValues(validationSchema, savedSettings)

  return (
    <FormDialog
      open={open}
      title={t('weatherModule:settingsDialog.title')}
      validationSchema={validationSchema}
      initialValues={initialValues}
      cancelButtonProps={{
        label: t('common:actionButtons.cancel'),
        hidden: isNil(savedSettings),
        onClick: onClose
      }}
      submitButtonProps={{
        label: t('common:actionButtons.save'),
        onClick: onSubmit
      }}
    >
      <TextField
        binding='key'
        label={t('weatherModule:settingsDialog.fields.key')}
        required
      />
      <Dropdown
        binding='temperatureUnit'
        label={t('weatherModule:settingsDialog.fields.temperatureUnit')}
        options={[
          {
            label: t(
              'weatherModule:settingsDialog.temperatureUnitOptions.celsius'
            ),
            value: TemperatureUnitTypes.CELSIUS
          },
          {
            label: t(
              'weatherModule:settingsDialog.temperatureUnitOptions.fahrenheit'
            ),
            value: TemperatureUnitTypes.FAHRENHEIT
          },
          {
            label: t(
              'weatherModule:settingsDialog.temperatureUnitOptions.kelvin'
            ),
            value: TemperatureUnitTypes.KELVIN
          }
        ]}
        required
      />
      <Dropdown
        binding='language'
        label={t('weatherModule:settingsDialog.fields.language')}
        options={[
          {
            label: t('common:languages.english'),
            value: LanguageTypes.ENGLISH
          },
          {
            label: t('common:languages.hungarian'),
            value: LanguageTypes.HUNGARIAN
          },
          {
            label: t('common:languages.polish'),
            value: LanguageTypes.POLISH
          }
        ]}
        required
      />
    </FormDialog>
  )
}

AppSettingsDialog.displayName = 'AppSettingsDialog'

export default AppSettingsDialog
