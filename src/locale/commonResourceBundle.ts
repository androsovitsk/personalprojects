import IResourceBundle from '../ui/components/TranslationProvider/types/IResourceBundle'

const commonResourceBundle: IResourceBundle[] = [
  {
    ns: 'common',
    lng: 'en',
    resources: {
      actionButtons: {
        cancel: 'Cancel',
        save: 'Save'
      },
      languages: {
        english: 'English',
        hungarian: 'Hungarian',
        polish: 'Polish'
      },
      validation: {
        required: '{{item}} is a required field.',
        exactLength: '{{item}} should be exactly {{length}} characters long.'
      }
    }
  },
  {
    ns: 'common',
    lng: 'hu',
    resources: {
      actionButtons: {
        cancel: 'Mégsem',
        save: 'Mentés'
      },
      languages: {
        english: 'Angol',
        hungarian: 'Magyar',
        polish: 'Lengyel'
      },
      validation: {
        required: '{{item}} egy kötelező mező.',
        exactLength: '{{item}} pontosan {{length}} karakter hosszú kell legyen.'
      }
    }
  },
  {
    ns: 'common',
    lng: 'pl',
    resources: {
      actionButtons: {
        cancel: 'Anuluj',
        save: 'Zapisz'
      },
      languages: {
        english: 'Angielski',
        hungarian: 'Węgierski',
        polish: 'Polski'
      },
      validation: {
        required: '{{item}} jest polem wymaganym.',
        exactLength: '{{item}} powinien mieć dokładnie {{length}} znaków.'
      }
    }
  }
]

export default commonResourceBundle
