import * as userDao from './persistence/user-dao'
import ApiUser from '@/app/api/lib/types/user'
import mapUser from './util/map-user'
import User from './types/user'

async function fetchData(): Promise<User> {
    const data = await fetch('/api/user')
    const json: ApiUser = await data.json()
    return mapUser(json)
}

async function getCurrentUser() {
    let currentUser = userDao.getCurrentUser()

    if (currentUser) {
        return currentUser
    }

    currentUser = await fetchData()
    userDao.cacheCurrentUser(currentUser)
    return currentUser
}

export { getCurrentUser }
