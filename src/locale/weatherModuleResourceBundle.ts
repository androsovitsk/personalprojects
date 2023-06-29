import IResourceBundle from '../ui/components/TranslationProvider/types/IResourceBundle'

const weatherModuleResourceBundle: IResourceBundle[] = [
  {
    ns: 'weatherModule',
    lng: 'en',
    resources: {
      sidebar: {
        title: 'Weather',
        searchField: 'Type in the name of a location',
        locationCard: {
          yourLocation: 'Your location',
          savedLocation: 'Saved location',
          infoBoxes: {
            noGeolocation:
              'Obtaining the weather information of your location was unsuccessful. Please check whether geolocation access is enabled or the API-key is valid.',
            fetchError:
              'Obtaining the weather information of {{item}} was unsuccessful. Please check whether the location name or API-key is valid.'
          }
        }
      },
      weatherContent: {
        title: 'Current weather',
        actions: {
          saveLocation: 'Save location',
          removeLocation: 'Remove location'
        },
        fields: {
          selectedCity: 'Selected location',
          description: 'Description',
          temperature: 'Temperature',
          highestTemperature: 'Highest temperature',
          lowestTemperature: 'Lowest temperature',
          feelsLikeTemperature: 'Feels like',
          humidity: 'Humidity',
          pressure: 'Pressure'
        },
        infoBoxes: {
          noResult: {
            title: 'Information',
            text: 'Search for a location or click on a location card to display the weather information.'
          },
          fetchError: {
            title: 'Error',
            text: 'Obtaining the weather information of this location was unsuccessful. Please check whether the location name or API-key is valid.'
          }
        }
      },
      settingsDialog: {
        title: 'App settings',
        fields: {
          key: 'API-key',
          temperatureUnit: 'Temperature unit',
          language: 'Language'
        },
        temperatureUnitOptions: {
          celsius: 'Celsius',
          fahrenheit: 'Fahrenheit',
          kelvin: 'Kelvin'
        }
      }
    }
  },
  {
    ns: 'weatherModule',
    lng: 'hu',
    resources: {
      sidebar: {
        title: 'Időjárás',
        searchField: 'Írd be a város nevét',
        locationCard: {
          yourLocation: 'Saját helyzet',
          savedLocation: 'Mentett helyzet',
          infoBoxes: {
            noGeolocation:
              'A saját helyzeted időjárási információit nem sikerült betölteni. Kérlek ellenőrizd, hogy a helymeghatározás engedélyezve van-e vagy helyes-e az API-kulcs.',
            fetchError:
              '{{item}} időjárási információit nem sikerült betölteni. Kérlek ellenőrizd, hogy helyes-e a város neve vagy az API-kulcs.'
          }
        }
      },
      weatherContent: {
        title: 'Jelenlegi időjárás',
        actions: {
          saveLocation: 'Helyzet mentése',
          removeLocation: 'Helyzet törlése'
        },
        fields: {
          selectedCity: 'Kiválasztott város',
          description: 'Leírás',
          temperature: 'Hőmérséklet',
          highestTemperature: 'Legmagasabb hőmérséklet',
          lowestTemperature: 'Legalacsonyabb hőmérséklet',
          feelsLikeTemperature: 'Hőérzet',
          humidity: 'Páratartalom',
          pressure: 'Nyomás'
        },
        infoBoxes: {
          noResult: {
            title: 'Információ',
            text: 'Keress egy városra vagy kattints egy helyzet kártyára, hogy megjelenítsd az időjárási információkat.'
          },
          fetchError: {
            title: 'Hiba',
            text: 'Ennek a városnak az időjárási információit nem sikerült betölteni. Kérlek ellenőrizd, hogy helyes-e a város neve vagy az API-kulcs.'
          }
        }
      },
      settingsDialog: {
        title: 'Alkalmazás beállítások',
        fields: {
          key: 'API-kulcs',
          temperatureUnit: 'Hőmérséklet-egység',
          language: 'Nyelv'
        },
        temperatureUnitOptions: {
          celsius: 'Celsius',
          fahrenheit: 'Fahrenheit',
          kelvin: 'Kelvin'
        }
      }
    }
  },
  {
    ns: 'weatherModule',
    lng: 'pl',
    resources: {
      sidebar: {
        title: 'Pogoda',
        searchField: 'Wpisz nazwę miasta',
        locationCard: {
          yourLocation: 'Twoja lokalizacja',
          savedLocation: 'Zapisana lokalizacja',
          infoBoxes: {
            noGeolocation:
              'Uzyskanie informacji o pogodzie w Twojej lokalizacji nie powiodło się. Sprawdź czy dostęp do geolokalizacji jest włączony lub czy klucz API jest prawidłowy.',
            fetchError:
              'Uzyskanie informacji o pogodzie {{item}} nie powiodło się. Sprawdź czy nazwa miasta lub klucz API są prawidłowe.'
          }
        }
      },
      weatherContent: {
        title: 'Aktualna pogoda',
        actions: {
          saveLocation: 'Zapisz lokalizację',
          removeLocation: 'Usuń lokalizację'
        },
        fields: {
          selectedCity: 'Wybrane miasto',
          description: 'Opis',
          temperature: 'Temperatura',
          highestTemperature: 'Najwyższa temperatura',
          lowestTemperature: 'Najniższa temperatura',
          feelsLikeTemperature: 'Odczuwalna temperatura',
          humidity: 'Wilgotność',
          pressure: 'Ciśnienie'
        },
        infoBoxes: {
          noResult: {
            title: 'Informacje',
            text: 'Wyszukaj miasto lub kliknij kartę lokalizacji, aby wyświetlić informacje o pogodzie.'
          },
          fetchError: {
            title: 'Błąd',
            text: 'Uzyskanie informacji o pogodzie w tym mieście nie powiodło się. Sprawdź czy nazwa miasta lub klucz API są prawidłowe.'
          }
        }
      },
      settingsDialog: {
        title: 'Ustawienia aplikacji',
        fields: {
          key: 'Klucz API',
          temperatureUnit: 'Jednostka temperatury',
          language: 'Język'
        },
        temperatureUnitOptions: {
          celsius: 'Celsjusz',
          fahrenheit: 'Fahrenheit',
          kelvin: 'Kelvin'
        }
      }
    }
  }
]

export default weatherModuleResourceBundle
