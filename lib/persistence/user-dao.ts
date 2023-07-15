import User from '../types/user'
import * as dao from './dao'

function getCurrentUser(): User | null {
    return dao.get('currentUser')
}

function cacheCurrentUser(currentUser: User) {
    dao.set<typeof currentUser>('currentUser', currentUser)
}

export { getCurrentUser, cacheCurrentUser }
