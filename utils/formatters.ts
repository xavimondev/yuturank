/**
 *
 * @param numberValue - Represents a number value
 * @returns string number formatted
 */
export const formatNumber = (numberValue: number) => {
  return new Intl.NumberFormat().format(numberValue)
}

/**
 *
 * @param date - Represents a date
 * @returns string date in format Month Day, Year.
 * Example: January 1, 2020
 */
export const formatDate = (date: string | Date | number) => {
  return new Date(date).toLocaleString('default', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
