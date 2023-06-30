import User from '../types/user'
import { getData } from './db'

async function getCurrentUser(): Promise<User> {
    const store = await getData()
    return store.currentUser
}

export { getCurrentUser }
