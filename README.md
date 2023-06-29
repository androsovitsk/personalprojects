# Personal projects

This repository is a collection of personal projects written in React/Typescript. It also contains a mini UI library (based on [MUI](https://mui.com) components) that is used across the different modules.

## Languages, frameworks and libraries used

- [React](https://react.dev)
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com)
- [MUI](https://mui.com)
- [Formik](https://formik.org) & [Yup](https://github.com/jquense/yup)
- [React Router](https://reactrouter.com/en/main)
- [React i18Next](https://react.i18next.com)
- [Ramda](https://ramdajs.com)
- [Wretch](https://elbywan.github.io/wretch/)
- [Fetch-mock](https://www.wheresrhys.co.uk/fetch-mock/)

## Weather project

### Features

The weather module is a relatively simple module using [OpenWeatherMap](https://openweathermap.org)'s Current Weather Data API. Besides searching for a specific location's weather information, it supports forecasts for the user's geolocation, has the ability to save locations by utilizing the browser's local storage, supports multiple languages and switching between temperature units instantly. In order to use it you must request an API key, which can be done on OpenWeatherMap's website.

### Installation

1. Request an API key from OpenWeatherMap
2. Clone the repository
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the development server

### Usage

The application opens up a dialog to enter your API-key and choose a desired temperature unit and language. These settings can be changed later using the settings icon on the right side of the sidebar. It will ask for geolocation access in order to use the user's geolocation feature. You can search for cities using the sidebar's search field.