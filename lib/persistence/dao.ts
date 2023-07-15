function get(key: string) {
    const json = localStorage.getItem(key)
    if (!json) return null
    return JSON.parse(json)
}

function set<Type>(key: string, data: Type) {
    localStorage.setItem(key, JSON.stringify(data))
}

function createSequence(label: string, start: number = 1) {
    localStorage.setItem(label, `${start}`)
}

function getSequence(label: string) {
    // running during build-time
    if (typeof window === 'undefined') return

    const next = localStorage.getItem(label)
    if (!next) throw Error(`Sequence ${label} not initialized`)

    localStorage.setItem(label, `${Number(next) + 1}`)
    return next
}

export { set, get, createSequence, getSequence }
