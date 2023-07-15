import Comment from './comment'
import User from './user'

export default interface DataStore {
    currentUser: User
    comments: Comment[]
}
