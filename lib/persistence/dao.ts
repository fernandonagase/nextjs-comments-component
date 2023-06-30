function get(key: string) {
    const json = localStorage.getItem(key)
    if (!json) return null
    return JSON.parse(json)
}

function set<Type>(key: string, data: Type) {
    localStorage.setItem(key, JSON.stringify(data))
}

export { set, get }
