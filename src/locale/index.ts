import commonResourceBundle from './commonResourceBundle'
import weatherModuleResourceBundle from './weatherModuleResourceBundle'
import IResourceBundle from '../ui/components/TranslationProvider/types/IResourceBundle'

const resourceBundles: IResourceBundle[] = [
  ...commonResourceBundle,
  ...weatherModuleResourceBundle
]

export default resourceBundles
