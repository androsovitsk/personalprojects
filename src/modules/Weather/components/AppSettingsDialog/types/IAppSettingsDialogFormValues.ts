import TemperatureUnitTypes from '../../../types/TemperatureUnitTypes'
import LanguageTypes from '../../../../../ui/components/TranslationProvider/types/LanguageTypes'

interface IAppSettingsDialogFormValues {
  key: string
  temperatureUnit: TemperatureUnitTypes
  language: LanguageTypes
}

export default IAppSettingsDialogFormValues
