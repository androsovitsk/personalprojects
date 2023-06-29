import { isEmpty } from 'ramda'

/** Converts the first letter of a string to uppercase. Returns back an empty string when an empty string is provided. */
const firstLetterToUppercase = (text: string): string =>
  isEmpty(text) ? '' : [text.charAt(0).toUpperCase(), text.slice(1)].join('')

export default firstLetterToUppercase
