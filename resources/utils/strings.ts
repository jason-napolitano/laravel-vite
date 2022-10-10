/** --------------------------------------------
 * Truncate a string and add an ellipsis to the
 * end of it
 *
 * @param input
 * @param n
 * @returns {string|*}
 */
export const truncate = (input: string, n = 55) =>
  input.length > 5 ? input.substring(0, n) + '...' : input

/** --------------------------------------------
 * Removes hyphens (EG: '-' )  from a string
 *
 * @param phrase {string}
 * @returns {string}
 */
export const removeHyphens = (phrase: string) => phrase.replace(/-/g, ' ')

/** --------------------------------------------
 * Converts the first letter of each word in
 * a multi-word string to uppercase
 *
 * @param phrase {string}
 * @returns {string}
 */
export const toTitleCase = (phrase: string) =>
  phrase
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

/**
 /** --------------------------------------------
 * Parses a number value and returns the
 * corresponding comma-delineated string value
 *
 * @param number {number} The value to parse
 *
 * @returns {string}
 */
export const thousandsSeparator = (number: number) => {
  const num_parts = number.toString().split('.')
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return num_parts.join('.')
}

/**
 /** --------------------------------------------
 * Capitalize the first letter in a string
 *
 * @link https://www.php.net/manual/en/function.ucfirst.php
 *
 * @param string {string}
 * @returns {string}
 */
export const ucFirst = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)
