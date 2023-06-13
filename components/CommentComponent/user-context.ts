import { createContext, useContext } from 'react'
import User from './types/user'

const UserContext = createContext<User | null>(null)

export function useCurrentUser() {
    const currentUser = useContext(UserContext)

    if (!currentUser) {
        throw new Error(
            'useCurrentUser has to be used within <UserContext.Provider>'
        )
    }

    return currentUser
}

export default UserContext
