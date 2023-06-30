const minuteInSeconds = 60
const hourInSeconds = 3600
const dayInSeconds = 86400
const weekInSeconds = 604800
const monthInSeconds = 2419200
const yearInSeconds = 29030400

// timestamp in seconds
export function getCreatedAtString(timestamp: number) {
    let finalUnit = 'second'
    let conversionDenominator = 1

    if (timestamp >= minuteInSeconds && timestamp < hourInSeconds) {
        conversionDenominator = minuteInSeconds
        finalUnit = 'minute'
    } else if (timestamp >= hourInSeconds && timestamp < dayInSeconds) {
        conversionDenominator = hourInSeconds
        finalUnit = 'hour'
    } else if (timestamp >= dayInSeconds && timestamp < weekInSeconds) {
        conversionDenominator = dayInSeconds
        finalUnit = 'day'
    } else if (timestamp >= weekInSeconds && timestamp < monthInSeconds) {
        conversionDenominator = weekInSeconds
        finalUnit = 'week'
    } else if (timestamp >= monthInSeconds && timestamp < yearInSeconds) {
        conversionDenominator = monthInSeconds
        finalUnit = 'month'
    } else if (timestamp >= yearInSeconds) {
        return 'More than one year ago'
    }

    const finalValue = Math.floor(timestamp / conversionDenominator)
    if (finalValue > 1) {
        finalUnit = `${finalUnit}s`
    }

    return `${finalValue} ${finalUnit} ago`
}
