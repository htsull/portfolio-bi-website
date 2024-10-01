export function getCustomLocaleDateTime(locale = 'en-US') {
  const currentDateTime = new Date()

  // Get the date and time in a specific locale format
  const localeDate = currentDateTime.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const localeTime = currentDateTime.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true // Use 12-hour format, set to false for 24-hour format
  })

  return `${localeDate} ${localeTime}`
}
