const secondInMillis = 1000
const minuteInMillis = 60000
const hourInMillis = 3600000
const dayInMillis = 86400000
const weekInMillis = 604800000
const monthInMillis = 2419200000
const yearInMillis = 29030400000

export function getCreatedAtString(timestamp: number) {
    const interval = Date.now() - timestamp

    if (interval < secondInMillis) return 'now'

    let finalUnit = 'second'
    let conversionDenominator = 1000

    if (interval >= minuteInMillis && interval < hourInMillis) {
        conversionDenominator = minuteInMillis
        finalUnit = 'minute'
    } else if (interval >= hourInMillis && interval < dayInMillis) {
        conversionDenominator = hourInMillis
        finalUnit = 'hour'
    } else if (interval >= dayInMillis && interval < weekInMillis) {
        conversionDenominator = dayInMillis
        finalUnit = 'day'
    } else if (interval >= weekInMillis && interval < monthInMillis) {
        conversionDenominator = weekInMillis
        finalUnit = 'week'
    } else if (interval >= monthInMillis && interval < yearInMillis) {
        conversionDenominator = monthInMillis
        finalUnit = 'month'
    } else if (interval >= yearInMillis) {
        return 'More than one year ago'
    }

    const finalValue = Math.floor(interval / conversionDenominator)
    if (finalValue > 1) {
        finalUnit = `${finalUnit}s`
    }

    return `${finalValue} ${finalUnit} ago`
}
